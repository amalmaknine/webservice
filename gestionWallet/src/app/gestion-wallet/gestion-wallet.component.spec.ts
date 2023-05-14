import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionWalletComponent } from './gestion-wallet.component';

describe('GestionWalletComponent', () => {
  let component: GestionWalletComponent;
  let fixture: ComponentFixture<GestionWalletComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionWalletComponent]
    });
    fixture = TestBed.createComponent(GestionWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
