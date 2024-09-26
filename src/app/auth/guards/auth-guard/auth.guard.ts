import { CanActivateFn, Router } from '@angular/router';
import { KeycloakService } from '../../../keycloak/services/keycloak.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {
  // Services
  const keycloakService: KeycloakService = inject<KeycloakService>(KeycloakService);
  const routerService: Router = inject<Router>(Router);

  if(!keycloakService.keycloak.authenticated || keycloakService.keycloak.isTokenExpired()){
    routerService.navigate(['auth/login']);
    return false;  
  }
  
  return true;
};
