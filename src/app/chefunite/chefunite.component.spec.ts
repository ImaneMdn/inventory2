import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefuniteComponent } from './chefunite.component';

describe('ChefuniteComponent', () => {
  let component: ChefuniteComponent;
  let fixture: ComponentFixture<ChefuniteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefuniteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefuniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
