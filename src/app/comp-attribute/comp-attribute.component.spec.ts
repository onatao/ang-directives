import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompAttributeComponent } from './comp-attribute.component';

describe('CompAttributeComponent', () => {
  let component: CompAttributeComponent;
  let fixture: ComponentFixture<CompAttributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompAttributeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
