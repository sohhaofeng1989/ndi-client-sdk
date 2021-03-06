/**
 * National Digital Identity (NDI) - ASP API
 * This is the API store where you can discover everything about integrating with the National Digital Identity (NDI) platform. To try out the API, first go to the token endpoint section to learn how to obtain an access token to access the API.  # Release Notes   * 0.3.2 (Release Date)     * Initial release of API  # Overview   The Authentication Service Provider (ASP) is a key component of the NDI platform which performs authentication and authorization.  Client apps accessing resources (API, data) in protected domains (e.g. Government agency, bank systems) may invoke the ASP to authenticate the end-user and obtain the access tokens to access the protected resources.   Client apps invoke the ASP through an interface and interaction flows based on the widely supported OpenID Connect (OIDC) specifications.   The ASP can be federated - it may be run and operated independently from the Government NDI cluster, e.g. a financial institution may run an instance of ASP on its platform to serve the needs of its applications.   <br><br>    The ASP may be operated in the 2 modes - as an OIDC Provider, or as a pure-play authenticator.  The operating modes will decide how relying parties (i.e. the client app) and the Authorization Server of the federated site interact with the ASP.  In both modes, the ASP is only responsible for authenticating the user and generates the ID token, it is the organization's Authorization Server which determines whether the relying party and the   user are authorized to access its protected resources and issues the access token accordingly.    ## Mode 1: ASP as an OpenID Connect Provider    <img style=\"width:50%; margin-left:auto; margin-right:auto; display:block\" src=\"../img/openIDProvider.png\"/>    The ASP acts as an OIDC Provider, handling the OIDC flow with the relying party.  This operating mode is useful for organizations which are planning to expose their capabilities through API and may not have a OAuth 2.0/OIDC enabled Authorization Server.  During the OIDC flow, the ASP performs user authentication with the user's NDI form factor, on successful authentication, it calls the organization's Authorization Server to obtain an access token.  The Authorization Server determines whether the relying party and user has proper access (based on the organization's access policy) and generates the access token accordingly.  The ASP returns the access token to the relying party which may then use it to access protected resources.   <br><br>   In this operating mode, the ASP integrates with the Authorization Server of the organization through the Domain Authorization Interface.    ## Mode 2: ASP as an Authenticator     <img style=\"width:50%; margin-left:auto; margin-right:auto; display:block\" src=\"../img/authenticator.png\"/>    The ASP acts as an authenticator service which the Authorization Server calls to perform user authentication with the user's NDI form factor.  This operation mode is applicable for organizations which are already offering OAuth 2.0 or OIDC based authorization to relying parties accessing their protected resources.  In this scenario, organizations typically use an Authorization Server (or IAM) module to handle the OAuth 2.0/OIDC flows with relying parties.  During the OAuth 2.0/OIDC flow, the Authorization Server module calls the ASP authentication API to perform user authentication with the user's NDI form factor.  On successful user authentication, the Authorization Server determines whether the relying party and user have the proper access (based on the organization's access policies), then generates and returns an access token to the relying party which it uses to access protected resources.   <br><br>   In this operating mode, the Authorization Server of the organization will integrate with the ASP through the ASP Authentication API. 
 *
 * OpenAPI spec version: 0.3.2
 * Contact: ndi_support@ndi.gov.sg
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.1
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'api/AuthenticationApi', 'api/CertificatesTokenConfigurationsApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./api/AuthenticationApi'), require('./api/CertificatesTokenConfigurationsApi'));
  }
}(function(ApiClient, AuthenticationApi, CertificatesTokenConfigurationsApi) {
  'use strict';

  /**
   * This_is_the_API_store_where_you_can_discover_everything_about_integratingwith_the_National_Digital_Identity__NDI_platform__To_try_out_theAPI_first_go_to_the_token_endpoint_section_to_learn_how_to_obtain_an_accesstoken_to_access_the_API__Release_Notes___0_3_2__Release_Date_____Initial_release_of_API_Overview__The_Authentication_Service_Provider__ASP_is_a_key_component_of_the_NDI_platform_which_performs_authentication_and_authorization___Client_apps_accessing_resources__API_data_in_protected_domains__e_g__Government_agency_bank_systems_may_invoke_the_ASP_to_authenticate_the_end_user_and_obtain_the_access_tokens_to_access_the_protected_resources___Client_apps_invoke_the_ASP_through_an_interface_and_interaction_flows_based_on_the_widely_supported_OpenID_Connect__OIDC_specifications___The_ASP_can_be_federated___it_may_be_run_and_operated_independently_from_the_Government_NDI_cluster_e_g__a_financial_institution_may_run_an_instance_of_ASP_on_its_platform_to_serve_the_needs_of_its_applications___brbr__The_ASP_may_be_operated_in_the_2_modes___as_an_OIDC_Provider_or_as_a_pure_play_authenticator___The_operating_modes_will_decide_how_relying_parties__i_e__the_client_app_and_the_Authorization_Server_of_the_federated_site_interact_with_the_ASP___In_both_modes_the_ASP_is_only_responsible_for_authenticating_the_user_and_generates_the_ID_token_it_is_the_organizations_Authorization_Server_which_determines_whether_the_relying_party_and_the__user_are_authorized_to_access_its_protected_resources_and_issues_the_access_token_accordingly____Mode_1_ASP_as_an_OpenID_Connect_Provider__img_stylewidth50_margin_leftauto_margin_rightauto_displayblock_src__imgopenIDProvider_png__The_ASP_acts_as_an_OIDC_Provider_handling_the_OIDC_flow_with_the_relying_party___This_operating_mode_is_useful_for_organizations_which_are_planning_to_expose_their_capabilities_through_API_and_may_not_have_a_OAuth_2_0OIDC_enabled_Authorization_Server___During_the_OIDC_flow_the_ASP_performs_user_authentication_with_the_users_NDI_form_factor_on_successful_authentication_it_calls_the_organizations_Authorization_Server_to_obtain_an_access_token___The_Authorization_Server_determines_whether_the_relying_party_and_user_has_proper_access__based_on_the_organizations_access_policy_and_generates_the_access_token_accordingly___The_ASP_returns_the_access_token_to_the_relying_party_which_may_then_use_it_to_access_protected_resources___brbr__In_this_operating_mode_the_ASP_integrates_with_the_Authorization_Server_of_the_organization_through_the_Domain_Authorization_Interface____Mode_2_ASP_as_an_Authenticator___img_stylewidth50_margin_leftauto_margin_rightauto_displayblock_src__imgauthenticator_png__The_ASP_acts_as_an_authenticator_service_which_the_Authorization_Server_calls_to_perform_user_authentication_with_the_users_NDI_form_factor___This_operation_mode_is_applicable_for_organizations_which_are_already_offering_OAuth_2_0_or_OIDC_based_authorization_to_relying_parties_accessing_their_protected_resources___In_this_scenario_organizations_typically_use_an_Authorization_Server__or_IAM_module_to_handle_the_OAuth_2_0OIDC_flows_with_relying_parties___During_the_OAuth_2_0OIDC_flow_the_Authorization_Server_module_calls_the_ASP_authentication_API_to_perform_user_authentication_with_the_users_NDI_form_factor___On_successful_user_authentication_the_Authorization_Server_determines_whether_the_relying_party_and_user_have_the_proper_access__based_on_the_organizations_access_policies_then_generates_and_returns_an_access_token_to_the_relying_party_which_it_uses_to_access_protected_resources___brbr__In_this_operating_mode_the_Authorization_Server_of_the_organization_will_integrate_with_the_ASP_through_the_ASP_Authentication_API_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var NationalDigitalIdentityNdiAspApi = require('index'); // See note below*.
   * var xxxSvc = new NationalDigitalIdentityNdiAspApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new NationalDigitalIdentityNdiAspApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new NationalDigitalIdentityNdiAspApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new NationalDigitalIdentityNdiAspApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 0.3.2
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AuthenticationApi service constructor.
     * @property {module:api/AuthenticationApi}
     */
    AuthenticationApi: AuthenticationApi,
    /**
     * The CertificatesTokenConfigurationsApi service constructor.
     * @property {module:api/CertificatesTokenConfigurationsApi}
     */
    CertificatesTokenConfigurationsApi: CertificatesTokenConfigurationsApi
  };

  return exports;
}));
