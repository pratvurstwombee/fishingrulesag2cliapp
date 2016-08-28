import { Component, OnInit } from '@angular/core';
import { Router } 		from '@angular/router';
import { Observable } 	from 'rxjs/Rx';

import { Fish, FishService } from './shared';

@Component({
  moduleId: module.id,
  selector: 'app-fish-list',
  templateUrl: 'fish-list.component.html',
  styleUrls: ['fish-list.component.css']
})
export class FishListComponent implements OnInit {
	fishList: Fish[] = [];
  error: any;
		
	constructor(
		private router: Router,
		private fishService: FishService) { }

	ngOnInit() {
		this.getAllFishList();
	}
	
	onSelect(fish: Fish) {
		this.gotoDetail(fish.id);
	}
	
	private getAllFishList(){
		this.fishService.getAll()
			.subscribe(
				results => this.fishList = results,
				e => this.error = e,
				() => console.log("FishListComponent: Getting all fish done!")
			);
	}
	
	private gotoDetail(id:number) {
		this.router.navigate(['/fishlist/detail', id]);
	}
}
