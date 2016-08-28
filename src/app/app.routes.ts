import { provideRouter, RouterConfig }  from '@angular/router';

import { FishingRegionsComponent, FishingRegionDetailComponent } 		from './fishing-regions/'

const routes: RouterConfig = [
	{
        path: '',
        redirectTo: '/regions',
        pathMatch: 'full'
    },
	
	// fishing regions
    {
        path: 'regions',
        component: FishingRegionsComponent
    },
	
    {
        path: 'regions/detail/:id',
        component: FishingRegionDetailComponent
    },

];

export const appRouterProviders = [
    provideRouter(routes)
];
