import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyLaptopComponent } from './modify-laptop.component';

describe('ModifyLaptopComponent', () => {
  let component: ModifyLaptopComponent;
  let fixture: ComponentFixture<ModifyLaptopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyLaptopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
