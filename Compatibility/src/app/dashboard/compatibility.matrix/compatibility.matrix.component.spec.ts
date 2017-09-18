import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompatibilityMatrixComponent } from './compatibility.matrix.component';

describe('Compatibility.MatrixComponent', () => {
  let component: CompatibilityMatrixComponent;
  let fixture: ComponentFixture<CompatibilityMatrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompatibilityMatrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompatibilityMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
