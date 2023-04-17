import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavvComponent } from './sidenavv.component';

describe('SidenavvComponent', () => {
  let component: SidenavvComponent;
  let fixture: ComponentFixture<SidenavvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
