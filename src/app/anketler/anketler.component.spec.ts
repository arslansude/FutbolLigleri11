import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnketlerComponent } from './anketler.component';

describe('AnketlerComponent', () => {
  let component: AnketlerComponent;
  let fixture: ComponentFixture<AnketlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnketlerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnketlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
