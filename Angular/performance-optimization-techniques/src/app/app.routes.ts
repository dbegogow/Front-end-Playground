import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContentComponent } from './content/content.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'Dashboard',
  },
  {
    path: 'content',
    component: ContentComponent,
    title: 'Content',
  },
];
