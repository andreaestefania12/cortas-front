import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarGuardaComponent } from './editar-guarda.component';

describe('EditarGuardaComponent', () => {
  let component: EditarGuardaComponent;
  let fixture: ComponentFixture<EditarGuardaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarGuardaComponent]
    });
    fixture = TestBed.createComponent(EditarGuardaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
