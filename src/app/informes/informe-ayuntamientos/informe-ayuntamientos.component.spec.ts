import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeAyuntamientosComponent } from './informe-ayuntamientos.component';

describe('InformeAyuntamientosComponent', () => {
  let component: InformeAyuntamientosComponent;
  let fixture: ComponentFixture<InformeAyuntamientosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformeAyuntamientosComponent]
    });
    fixture = TestBed.createComponent(InformeAyuntamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
