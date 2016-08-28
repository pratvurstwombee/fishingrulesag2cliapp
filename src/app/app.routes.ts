import { provideRouter, RouterConfig }  from '@angular/router';

import { DashboardComponent, DashboardViewsComponent } 			        from './dashboard/'
import { FishingRegionsComponent, FishingRegionDetailComponent } 		from './fishing-regions/'
import { FishingRulesComponent, FishingRuleDetailComponent }		    from './fishing-rules/'
import { RestrictionsComponent, RestrictionDetailComponent }		    from './restrictions/'
import { MarineAreasComponent, MarineAreaDetailComponent }			    from './marine-areas/'
import { FishListComponent, FishDetailComponent }			            from './fish-list/'

const routes: RouterConfig = [
    {
        path: 'dashboard',
        component: DashboardComponent
    },
	{
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard/views/:regionId',
        component: DashboardViewsComponent
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

	// FishingRulesComponent
    {
        path: 'fishingrules',
        component: FishingRulesComponent
    },
    {
        path: 'fishingrules/detail/:id',
        component: FishingRuleDetailComponent
    },

	// RestrictionsComponent
    {
        path: 'restrictions',
        component: RestrictionsComponent
    },
    {
        path: 'restrictions/detail/:id',
        component: RestrictionDetailComponent
    },

	// marine areas
    {
        path: 'marineareas',
        component: MarineAreasComponent
    },
    {
        path: 'marineareas/detail/:id',
        component: MarineAreaDetailComponent
    },

    // FishListComponent
    {
        path: 'fishlist',
        component: FishListComponent
    },
    {
        path: 'fishlist/detail/:id',
        component: FishDetailComponent
    },
	

];

export const appRouterProviders = [
    provideRouter(routes)
];
