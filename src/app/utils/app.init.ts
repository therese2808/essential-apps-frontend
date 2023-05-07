import { KeycloakService } from 'keycloak-angular';

export function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8180/',
        realm: 'essential-app',
        clientId: 'essential-client',
      },
      initOptions: {
        //   onLoad: 'login-required',
        flow: 'implicit',
      },
      //loadUserProfileAtStartUp: true,
    });
}
