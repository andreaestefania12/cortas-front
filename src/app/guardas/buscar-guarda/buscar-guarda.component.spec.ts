import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarGuardaComponent } from './buscar-guarda.component';

describe('BuscarGuardaComponent', () => {
  let component: BuscarGuardaComponent;
  let fixture: ComponentFixture<BuscarGuardaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarGuardaComponent]
    });
    fixture = TestBed.createComponent(BuscarGuardaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
