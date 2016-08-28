import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Restriction, RestrictionService } from './shared';

@Component({
  selector: 'app-restriction-detail',
  templateUrl: 'restriction-detail.component.html',
  styleUrls: ['restriction-detail.component.css']
})
export class RestrictionDetailComponent implements OnInit {
  @Input()
  restriction: Restriction;

	sub: any;
  error: any;
  navigated = false; // true if navigated here

  constructor(
      private restrictionService: RestrictionService,
      private route: ActivatedRoute) {
  }

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
          if (params['id'] !== undefined) {
              let id = +params['id'];
              this.navigated = true;
      
              this.restrictionService.getById(id)
                  .subscribe(result => {
              this.restriction = result;
          },
          e => this.error = e);
          } else {
      // just display an error for demo
      this.error = 'Fishing Area is not currently selected!'
      
      // This is for adding an new item
              // this.navigated = false;
              // this.marineArea = new MarineArea();
          }
      });
  }

  goBack() {
      window.history.back();
  }
}
