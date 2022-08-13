import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPageDeleteProductComponent } from './admin-page-delete-product.component';

describe('AdminPageDeleteProductComponent', () => {
  let component: AdminPageDeleteProductComponent;
  let fixture: ComponentFixture<AdminPageDeleteProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPageDeleteProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPageDeleteProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
