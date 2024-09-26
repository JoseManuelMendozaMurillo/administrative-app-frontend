import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {

  // private properties
  private _keycloak: Keycloak | undefined;

  // getters for private properties
  get keycloak(): Keycloak {
    if (!this._keycloak) {
      this._keycloak = new Keycloak({
        url: environment.KC_URL,
        realm: environment.KC_REALM,
        clientId: environment.KC_CLIENT_ID
      });
    }
    return this._keycloak;
  }

  constructor() { }

  public async init(): Promise<void> {
    const authenticated: boolean = await this.keycloak.init({
      onLoad: 'check-sso', // Does not automatically log in the user
      checkLoginIframe: true, // Enable iframe to check session status
      checkLoginIframeInterval: 20, // Check session status every 20 seconds
    }); 

    if(authenticated){

    }
  }


  
}
