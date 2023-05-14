import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionSubsciberComponent } from './gestion-subsciber.component';

describe('GestionSubsciberComponent', () => {
  let component: GestionSubsciberComponent;
  let fixture: ComponentFixture<GestionSubsciberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionSubsciberComponent]
    });
    fixture = TestBed.createComponent(GestionSubsciberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
