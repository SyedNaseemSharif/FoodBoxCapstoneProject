import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPageAddProductComponent } from './admin-page-add-product.component';

describe('AdminPageAddProductComponent', () => {
  let component: AdminPageAddProductComponent;
  let fixture: ComponentFixture<AdminPageAddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPageAddProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPageAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
