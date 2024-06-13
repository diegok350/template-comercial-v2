import { Routes } from '@angular/router';
import { LayoutBaseComponent } from './layout/layout-base/layout-base.component';
import { LayoutEmptyComponent } from './layout/layout-empty/layout-empty.component';

export const routes: Routes = [
    {
        path: 'main',
        component: LayoutBaseComponent,
        children: [
            {
                path: '',
                loadComponent: () =>
                    import(
                        './pages/main/main.component'
                    )
            }
        ]
    },
    {
        path: 'search',
        component: LayoutEmptyComponent,
        children: [
            {
                path: '',
                loadComponent: () =>
                    import(
                        './pages/search/search.component'
                    )
            }
        ]
    },
    {
        path: 'game',
        component: LayoutEmptyComponent,
        children: [
            {
                path: '',
                loadComponent: () =>
                    import(
                        './pages/game/game.component'
                    )
            }
        ]
    },
    {
        path: 'main',
        redirectTo: 'main',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'main',
        pathMatch: 'full'
    },
];

