import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopListItemComponent } from './laptop-list-item.component';

describe('LaptopListItemComponent', () => {
  let component: LaptopListItemComponent;
  let fixture: ComponentFixture<LaptopListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaptopListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaptopListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
