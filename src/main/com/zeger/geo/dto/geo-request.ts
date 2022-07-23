class GeoRequest {

    private _ipAddress: string;


    constructor(ipAddress: string) {
        this._ipAddress = ipAddress;
    }


    get ipAddress(): string {
        return this._ipAddress;
    }

    set ipAddress(value: string) {
        this._ipAddress = value;
    }

}