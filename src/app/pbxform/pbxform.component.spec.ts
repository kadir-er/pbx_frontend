import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PbxformComponent } from './pbxform.component';

describe('PbxformComponent', () => {
  let component: PbxformComponent;
  let fixture: ComponentFixture<PbxformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PbxformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PbxformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
