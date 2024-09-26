import { APP_INITIALIZER, ApplicationConfig, forwardRef, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { KeycloakService } from './keycloak/services/keycloak.service';

export function kcFactory(kcService: KeycloakService): () => void {
  return () => kcService.init();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    {
      provide: APP_INITIALIZER,
      deps: [KeycloakService],
      useFactory: kcFactory,
      multi: true,
    },
  ]
};
