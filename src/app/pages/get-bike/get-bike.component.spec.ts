import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBikeComponent } from './get-bike.component';

describe('GetBikeComponent', () => {
  let component: GetBikeComponent;
  let fixture: ComponentFixture<GetBikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetBikeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
