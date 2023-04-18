import { TestBed } from '@angular/core/testing';

import { MealOptionsService } from './meal-options.service';

describe('MealOptionsService', () => {
  let service: MealOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
