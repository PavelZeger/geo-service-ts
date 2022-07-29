enum Metric {

    FailedConvertTimezone = "failed.convert.timezone.localtime",
    FilterRequestTimestamp = "filter.request.ts",
    FilterRequestCount = "filter.request.count",
    RequestRejects = "requests.rejects",
    GeoDataResponseFailure = "geo.data.response.failure",
    GeoDataResponseSuccess = "geo.data.response.success"

}

type Metrics = keyof typeof Metric;