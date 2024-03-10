import { Routes } from '@angular/router';
import { FilmsComponent } from '@pages/films/films.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('../pages/layout/layout.component').then(m => m.LayoutComponent), 
        children: [
            {
                path: 'nominadas',
                component: FilmsComponent
            }
        ]
    },
    
];
