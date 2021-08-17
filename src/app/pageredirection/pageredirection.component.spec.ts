import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageredirectionComponent } from './pageredirection.component';

describe('PageredirectionComponent', () => {
  let component: PageredirectionComponent;
  let fixture: ComponentFixture<PageredirectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageredirectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageredirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
