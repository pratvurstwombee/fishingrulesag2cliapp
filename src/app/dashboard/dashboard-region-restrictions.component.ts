import { Component, OnInit, Input } from '@angular/core';
// import { Restriction } 				from '../restrictions/restriction';
// import { RestrictionService } 		from '../restrictions/restriction.service';

@Component({
  selector: 'app-dashboard-region-restrictions',
  templateUrl: 'dashboard-region-restrictions.component.html',
  styleUrls: ['dashboard-region-restrictions.component.css']
})
export class DashboardRegionRestrictionsComponent implements OnInit {
	@Input()
	regionId: number;

  constructor() { }

  ngOnInit() {
  }

}
