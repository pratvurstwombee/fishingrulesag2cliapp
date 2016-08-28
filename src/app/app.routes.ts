import { provideRouter, RouterConfig }  from '@angular/router';

import { DashboardComponent } 			from './dashboard/'
// import { DashboardViewsComponent }		from './dashboard/dashboard-views.component'

import { FishingRegionsComponent, FishingRegionDetailComponent } 		from './fishing-regions/'

// import { MarineAreasComponent }			from './marine-areas/marine-areas.component'
// import { MarineAreaDetailComponent }	from './marine-areas/marine-area-detail.component'

import { FishListComponent, FishDetailComponent }			from './fish-list/'
import { FishingRulesComponent, FishingRuleDetailComponent }		from './fishing-rules/'
import { RestrictionsComponent, RestrictionDetailComponent }		from './restrictions/'

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
    // {
    //     path: 'dashboard/views/:regionId',
    //     component: DashboardViewsComponent
    // },
	
	// fishing regions
    {
        path: 'regions',
        component: FishingRegionsComponent
    },
	
    {
        path: 'regions/detail/:id',
        component: FishingRegionDetailComponent
    },

	// marine areas
    // {
    //     path: 'marineareas',
    //     component: MarineAreasComponent
    // },
    // {
    //     path: 'marineareas/detail/:id',
    //     component: MarineAreaDetailComponent
    // },
	
    // FishListComponent
    {
        path: 'fishlist',
        component: FishListComponent
    },
    {
        path: 'fishlist/detail/:id',
        component: FishDetailComponent
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

		
];

export const appRouterProviders = [
    provideRouter(routes)
];
