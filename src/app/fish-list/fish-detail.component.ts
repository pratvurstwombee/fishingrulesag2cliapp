import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Fish, FishService } from './shared';

@Component({
  selector: 'app-fish-detail',
  templateUrl: 'fish-detail.component.html',
  styleUrls: ['fish-detail.component.css']
})
export class FishDetailComponent implements OnInit {
	@Input()
  selectedFish: Fish;
	
	sub: any;
  error: any;
  navigated = false; // true if navigated here

  constructor(
  private fishService: FishService,
      private route: ActivatedRoute) {
  }

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
          if (params['id'] !== undefined) {
              let id = +params['id'];
              this.navigated = true;
      
              this.fishService.getById(id)
                  .subscribe(result => {
              this.selectedFish = result;
          },
          e => this.error = e);
          } else {
      // just display an error for demo
      this.error = 'Fish is not currently selected!'
          }
      });
  }

  goBack() {
      window.history.back();
  }	
}
