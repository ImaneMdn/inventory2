import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefcentreComponent } from './chefcentre.component';

describe('ChefcentreComponent', () => {
  let component: ChefcentreComponent;
  let fixture: ComponentFixture<ChefcentreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefcentreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefcentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
