import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletePbxformComponent } from './complete-pbxform.component';

describe('CompletePbxformComponent', () => {
  let component: CompletePbxformComponent;
  let fixture: ComponentFixture<CompletePbxformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletePbxformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletePbxformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
