import { Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('../app/dashboard/dashboard.component'),
  },
  {
    path: 'content',
    component: ContentComponent,
  },
];
