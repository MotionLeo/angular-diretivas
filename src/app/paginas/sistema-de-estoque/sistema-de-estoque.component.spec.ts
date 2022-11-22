import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaDeEstoqueComponent } from './sistema-de-estoque.component';

describe('SistemaDeEstoqueComponent', () => {
  let component: SistemaDeEstoqueComponent;
  let fixture: ComponentFixture<SistemaDeEstoqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SistemaDeEstoqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SistemaDeEstoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
