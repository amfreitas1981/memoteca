// <reference types="jasmine" />
import { ComponentFixture, TestBed } from '@angular/core/testing';

declare function describe(description: string, spec: () => void): void;
declare function it(description: string, spec: () => void): void;
declare function beforeEach(fn: () => void): void;
declare function expect(actual: any): { toBeTruthy(): void };

import { ListarPensamentoComponent } from './listar-pensamento.component';

describe('ListarPensamentoComponent', () => {
  let component: ListarPensamentoComponent;
  let fixture: ComponentFixture<ListarPensamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPensamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarPensamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
