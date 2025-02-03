import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextIconComponent } from './input-text-icon.component';
import { BaseIconComponent } from '../../../../icons/base-icon/base-icon.component';

describe('InputTextComponent', () => {
  let component: InputTextIconComponent<any, BaseIconComponent>;
  let fixture: ComponentFixture<InputTextIconComponent<any, BaseIconComponent>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputTextIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputTextIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
