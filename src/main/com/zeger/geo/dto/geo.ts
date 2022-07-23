class Geo {

    private _ip: string;
    private _timeZone: string;
    private _isIPV6: boolean;
    private _region: string;
    private _countryName: string;
    private _countryCode: string;
    private _city: string;
    private _isp: string;
    private _latitude: number;
    private _longitude: number;


    constructor(ip: string, timeZone: string, isIPV6: boolean, region: string, countryName: string, countryCode: string, city: string, isp: string, latitude: number, longitude: number) {
        this._ip = ip;
        this._timeZone = timeZone;
        this._isIPV6 = isIPV6;
        this._region = region;
        this._countryName = countryName;
        this._countryCode = countryCode;
        this._city = city;
        this._isp = isp;
        this._latitude = latitude;
        this._longitude = longitude;
    }


    get ip(): string {
        return this._ip;
    }

    set ip(value: string) {
        this._ip = value;
    }

    get timeZone(): string {
        return this._timeZone;
    }

    set timeZone(value: string) {
        this._timeZone = value;
    }

    get isIPV6(): boolean {
        return this._isIPV6;
    }

    set isIPV6(value: boolean) {
        this._isIPV6 = value;
    }

    get region(): string {
        return this._region;
    }

    set region(value: string) {
        this._region = value;
    }

    get countryName(): string {
        return this._countryName;
    }

    set countryName(value: string) {
        this._countryName = value;
    }

    get countryCode(): string {
        return this._countryCode;
    }

    set countryCode(value: string) {
        this._countryCode = value;
    }

    get city(): string {
        return this._city;
    }

    set city(value: string) {
        this._city = value;
    }

    get isp(): string {
        return this._isp;
    }

    set isp(value: string) {
        this._isp = value;
    }

    get latitude(): number {
        return this._latitude;
    }

    set latitude(value: number) {
        this._latitude = value;
    }

    get longitude(): number {
        return this._longitude;
    }

    set longitude(value: number) {
        this._longitude = value;
    }

}