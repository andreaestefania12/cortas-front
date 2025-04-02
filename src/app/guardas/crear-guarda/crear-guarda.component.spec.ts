import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearGuardaComponent } from './crear-guarda.component';

describe('CrearGuardaComponent', () => {
  let component: CrearGuardaComponent;
  let fixture: ComponentFixture<CrearGuardaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearGuardaComponent]
    });
    fixture = TestBed.createComponent(CrearGuardaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
