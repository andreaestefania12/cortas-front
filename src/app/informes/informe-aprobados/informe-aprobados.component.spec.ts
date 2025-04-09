import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeAprobadosComponent } from './informe-aprobados.component';

describe('InformeAprobadosComponent', () => {
  let component: InformeAprobadosComponent;
  let fixture: ComponentFixture<InformeAprobadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformeAprobadosComponent]
    });
    fixture = TestBed.createComponent(InformeAprobadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
