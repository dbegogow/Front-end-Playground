import { Routes } from '@angular/router';
import { registerRoutes } from './auth/auth.routes';

export const appRoutes: Routes = ([] = [
  {
    path: 'register',
    loadChildren: () => registerRoutes,
  },
]);
