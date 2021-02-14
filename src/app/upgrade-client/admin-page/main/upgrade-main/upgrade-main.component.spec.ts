import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeMainComponent } from './upgrade-main.component';

describe('UpgradeMainComponent', () => {
  let component: UpgradeMainComponent;
  let fixture: ComponentFixture<UpgradeMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpgradeMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
