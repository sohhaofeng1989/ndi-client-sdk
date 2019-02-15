# NationalDigitalIdentityNdiAspApi.CertificatesTokenConfigurationsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getJwks**](CertificatesTokenConfigurationsApi.md#getJwks) | **GET** /v1/asp/certs | Get the JWK Set containing the ASP signing keys.
[**getOpenidConfig**](CertificatesTokenConfigurationsApi.md#getOpenidConfig) | **GET** /v1/asp/.well-known/openid-configuration | Get OpenID Connect Discovery document of this ASP
[**v1AspTokenPost**](CertificatesTokenConfigurationsApi.md#v1AspTokenPost) | **POST** /v1/asp/token | Exchange for the security tokens (ID token and access token) with the authorization code obtained from the authorization endpoint.


<a name="getJwks"></a>
# **getJwks**
> getJwks()

Get the JWK Set containing the ASP signing keys.

Get the JSON Web Key (JWK) Set containing the signing keys of this ASP. The signing keys (i.e. public keys) are used by the form factor local agent (or the form factor authenticator) to verify the signed challenges sent by the ASP. The signing key to use for verification is indicated by the kid value in the header of the signed challenge JWS. The JWK set is to be downloaded periodically as the ASP refreshes its signing keys regularly.

### Example
```javascript
var NationalDigitalIdentityNdiAspApi = require('national_digital_identity__ndi___asp_api');

var apiInstance = new NationalDigitalIdentityNdiAspApi.CertificatesTokenConfigurationsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getJwks(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getOpenidConfig"></a>
# **getOpenidConfig**
> getOpenidConfig()

Get OpenID Connect Discovery document of this ASP

Get the OpenID Connect discovery document of this ASP. The discovery document is downloaded by relying parties to find out the onfiguration of and capabilities supported by the ASP e.g. authorization url, token url, etc.  Relying parties should download the discovery document periodically as ASP configuration may change from time to time. Response: the response body contains the discovery document.

### Example
```javascript
var NationalDigitalIdentityNdiAspApi = require('national_digital_identity__ndi___asp_api');

var apiInstance = new NationalDigitalIdentityNdiAspApi.CertificatesTokenConfigurationsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getOpenidConfig(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="v1AspTokenPost"></a>
# **v1AspTokenPost**
> v1AspTokenPost()

Exchange for the security tokens (ID token and access token) with the authorization code obtained from the authorization endpoint.

OAuth2.0 token endpoint. Your client app calls this endpoint to exchange for the security tokens (ID token and access token) with the authorization code obtained from the authorization endpoint after a successful user authetication/authorization. 

### Example
```javascript
var NationalDigitalIdentityNdiAspApi = require('national_digital_identity__ndi___asp_api');

var apiInstance = new NationalDigitalIdentityNdiAspApi.CertificatesTokenConfigurationsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1AspTokenPost(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

