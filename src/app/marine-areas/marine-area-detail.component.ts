import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MarineArea, MarineAreaService }  from './shared/';
import { FishingRegionService }           from '../fishing-regions/shared';

@Component({
  moduleId: module.id,
  selector: 'app-marine-area-detail',
  templateUrl: 'marine-area-detail.component.html',
  styleUrls: ['marine-area-detail.component.css']
})
export class MarineAreaDetailComponent implements OnInit {
    marineArea: MarineArea;

	selectedRegion: string;
	
	sub: any;
  error: any;
  navigated = false; // true if navigated here

  constructor(
      private marineAreaService: MarineAreaService,
      private fishingRegionService: FishingRegionService,
      private route: ActivatedRoute) {
  }

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
          if (params['id'] !== undefined) {
              let id = +params['id'];
              this.navigated = true;
      
              this.marineAreaService.getById(id)
                  .subscribe(result => {
                            this.marineArea = result;
                            this.getSelectedRegion(this.marineArea.fishingRegionId);
                          },
                          e => this.error = e
                  );
          } else {
            // just display an error for demo
            this.error = 'Fishing Area is not currently selected!'
          }
      });
  }

  goBack() {
      window.history.back();
  }
	
	private getSelectedRegion(regionId:number)
	{
		this.fishingRegionService.getById(regionId)
									.subscribe(result => this.selectedRegion = result.region);
	}
}
