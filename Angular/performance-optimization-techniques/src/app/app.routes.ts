import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('../app/dashboard/dashboard.component'),
  },
  {
    path: 'content',
    loadComponent: () => import('../app/content/content.component'),
    children: [
      {
        path: 'posts',
        loadComponent: () => import('../app/content/posts/posts.component'),
      },
    ],
  },
];
