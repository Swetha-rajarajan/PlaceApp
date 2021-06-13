import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CompanyfilterPipe } from '../pipes/companyfilter.pipe';
import { ReviewService } from '../services/review.service';

import { CompanyreviewComponent } from './companyreview.component';

describe('CompanyreviewComponent', () => {
  let component: CompanyreviewComponent;
  let fixture: ComponentFixture<CompanyreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyreviewComponent,
        CompanyfilterPipe ],
      imports: [HttpClientModule,
        FormsModule],
          providers: [
            ReviewService
          ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
