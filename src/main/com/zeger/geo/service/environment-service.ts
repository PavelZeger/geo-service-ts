class EnvironmentService {

    private empty: string = "";
    private _environment: Environment;

    constructor(environment: Environment) {
        this._environment = environment;
    }

    get environment(): Environment {
        return this._environment;
    }

    set environment(value: Environment) {
        this._environment = value;
    }

    getActiveProfiles(): string {
        var activeProfiles: Array<string> = environment.activeProfiles;
        var profile = activeProfiles.length != 0 ? this.concatActiveProfiles(activeProfiles) : this.empty;
        return profile;
    }

    private concatActiveProfiles(activeProfiles: Array<string>): string {
        return this.empty; //join(activeProfiles, ",")
    }

}