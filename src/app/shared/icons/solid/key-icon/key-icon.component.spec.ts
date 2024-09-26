import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyIconComponent } from './key-icon.component';

describe('KeyIconComponent', () => {
  let component: KeyIconComponent;
  let fixture: ComponentFixture<KeyIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
