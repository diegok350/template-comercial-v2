import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddlewareBarComponent } from './middleware-bar.component';

describe('MiddlewareBarComponent', () => {
  let component: MiddlewareBarComponent;
  let fixture: ComponentFixture<MiddlewareBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiddlewareBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiddlewareBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
