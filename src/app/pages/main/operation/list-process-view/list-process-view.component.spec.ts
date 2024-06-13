import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProcessViewComponent } from './list-process-view.component';

describe('ListProcessViewComponent', () => {
  let component: ListProcessViewComponent;
  let fixture: ComponentFixture<ListProcessViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListProcessViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListProcessViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
