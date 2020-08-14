# VC Issuer HTTP API Style Guide

This document is used to track design choices made in the development of [api.yml](./api.yml).

To the best of our ability we are attempting to follow [restfulapi.net](https://restfulapi.net/).

In cases where excessive optionality is allowed, or where consensus is needed, we will document our decisions here. The working decisions documented here so far should be understood in the context of an unstable API, i.e., the API may change in substantive ways in the future.

## API Versioning

We have decided to use HTTP Headers to version the API.

## Regarding Collections and Controllers

We are debating the appropriatness of both. 

See: 
- [Agree to API Style Guide](https://github.com/w3c-ccg/vc-issuer-http-api/issues/41)
- [resource-naming](https://restfulapi.net/resource-naming/)