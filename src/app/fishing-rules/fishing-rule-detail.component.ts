import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FishingRule, FishingRuleService } from './shared';

@Component({
  moduleId: module.id,
  selector: 'app-fishing-rule-detail',
  templateUrl: 'fishing-rule-detail.component.html',
  styleUrls: ['fishing-rule-detail.component.css']
})
export class FishingRuleDetailComponent implements OnInit {
  selectedRule: FishingRule;
	
	sub: any;
  error: any;
  navigated = false; // true if navigated here

  constructor(
      private fishingRuleService: FishingRuleService,
      private route: ActivatedRoute) {
  }

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
          if (params['id'] !== undefined) {
              let id = +params['id'];
              this.navigated = true;
      
              this.fishingRuleService.getById(id)
                  .subscribe(result => {
                               this.selectedRule = result;
                            },
                            e => this.error = e);
          } else {
            // just display an error for demo
            this.error = 'Fishing Rule is not currently selected!'
          }
      });
  }

  goBack() {
      window.history.back();
  }
}
