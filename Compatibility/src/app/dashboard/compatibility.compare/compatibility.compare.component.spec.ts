import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompatibilityCompareComponent } from './compatibility.compare.component';

describe('CompatibilityCompareComponent', () => {
  let component: CompatibilityCompareComponent;
  let fixture: ComponentFixture<CompatibilityCompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompatibilityCompareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompatibilityCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
