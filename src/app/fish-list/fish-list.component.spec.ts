/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { FishListComponent } from './fish-list.component';

describe('Component: FishList', () => {
  it('should create an instance', () => {
    let component = new FishListComponent();
    expect(component).toBeTruthy();
  });
});
