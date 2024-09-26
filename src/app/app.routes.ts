import { Routes } from '@angular/router';
import { authRoutes } from './auth/auth.routes';
import { authGuard } from './auth/guards/auth-guard/auth.guard';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        canActivate: [authGuard],
    },
    ...authRoutes,
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    },
];
