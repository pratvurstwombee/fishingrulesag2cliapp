import { provideRouter, RouterConfig }  from '@angular/router';

import { DashboardComponent } 			from './dashboard/'
// import { DashboardViewsComponent }		from './dashboard/dashboard-views.component'

import { FishingRegionsComponent, FishingRegionDetailComponent } 		from './fishing-regions/'

// import { MarineAreasComponent }			from './marine-areas/marine-areas.component'
// import { MarineAreaDetailComponent }	from './marine-areas/marine-area-detail.component'

// import { FishListComponent }			from './fish-list/fish-list.component'
// import { FishDetailComponent }			from './fish-list/fish-detail.component'

// import { FishingRulesComponent }		from './fishing-rules/fishing-rules.component'
// import { FishingRuleDetailComponent }	from './fishing-rules/fishing-rule-detail.component'

// import { RestrictionsComponent }		from './restrictions/restrictions.component'
// import { RestrictionDetailComponent }	from './restrictions/restriction-detail.component'

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
	
	// // FishListComponent
    // {
    //     path: 'fishlist',
    //     component: FishListComponent
    // },
    // {
    //     path: 'fishlist/detail/:id',
    //     component: FishDetailComponent
    // },
	
	// FishingRulesComponent
    // {
    //     path: 'fishingrules',
    //     component: FishingRulesComponent
    // },
    // {
    //     path: 'fishingrules/detail/:id',
    //     component: FishingRuleDetailComponent
    // },
	
	// RestrictionsComponent
    // {
    //     path: 'restrictions',
    //     component: RestrictionsComponent
    // },
    // {
    //     path: 'restrictions/detail/:id',
    //     component: RestrictionDetailComponent
    // },
	
];

export const appRouterProviders = [
    provideRouter(routes)
];
