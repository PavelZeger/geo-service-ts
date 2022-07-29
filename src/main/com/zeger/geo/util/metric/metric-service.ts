class MetricService {

    private _isActive: boolean;
    private _statsDClient: StatsDClient;
    private _environmentService: EnvironmentService;

    constructor(statsDClient: StatsDClient, environmentService: EnvironmentService, isActive: Boolean) {
        this._statsDClient = statsDClient;
        this._environmentService = environmentService;
        this._isActive = environmentService.getActiveProfiles().includes("stg");
    }

    get statsDClient(): StatsDClient {
        return this._statsDClient;
    }

    set statsDClient(value: StatsDClient) {
        this._statsDClient = value;
    }

    get environmentService(): EnvironmentService {
        return this._environmentService;
    }

    set environmentService(value: EnvironmentService) {
        this._environmentService = value;
    }

    get isActive(): boolean {
        return this._isActive;
    }

    set isActive(value: boolean) {
        this._isActive = value;
    }

    gauge(this: any, metric: Metric, value: number): void {
        if (this._isActive.equals(true))
            this._statsDClient.gauge(metric, value)
    }

    count(this: any, metric: Metric, delta: number): void {
        if (this._isActive.equals(true))
            this._statsDClient.count(metric, delta)
    }

    // @ts-ignore
    increment(this: any, metric: Metric): void {
        if (this._isActive.equals(true))
            this._statsDClient.incrementCounter(metric)
    }

    // @ts-ignore
    increment(this: any, metric: Metric, sampleRate: number): void {
        if (this._isActive.equals(true))
            this._statsDClient.incrementCounter(metric, sampleRate)
    }

    // @ts-ignore
    increment(this: any, metric: Metric, tags: string): void {
        if (this._isActive.equals(true))
            this._statsDClient.incrementCounter(metric, tags)
    }

    reportDurationMillis(this: any, metric: Metric, startTime: Instant): void {
        if (this._isActive.equals(true)) {
            var duration: bigint = Duration.between(startTime, Instant.now()).toMillis()
            this.gauge(metric, duration)
        }
    }

}