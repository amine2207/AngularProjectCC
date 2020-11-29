import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateJeuComponentComponent } from './update-jeu-component.component';

describe('UpdateJeuComponentComponent', () => {
  let component: UpdateJeuComponentComponent;
  let fixture: ComponentFixture<UpdateJeuComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateJeuComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateJeuComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
