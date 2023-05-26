import { TestBed } from '@angular/core/testing';

import { TeamsServices } from './teams.service';

describe('TeamsService', () => {
  let service: TeamsServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamsServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
