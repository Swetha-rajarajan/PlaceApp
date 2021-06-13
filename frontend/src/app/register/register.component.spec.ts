import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from '../services/user.service';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
let component: RegisterComponent;
let fixture: ComponentFixture<RegisterComponent>;
beforeEach(async () => {
    await TestBed.configureTestingModule({
       declarations: [ RegisterComponent ],
       imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [
        UserService
      ]
    })
  .compileComponents();
  });
beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
});

it('should create', () => {
    expect(component).toBeTruthy();
  });
});
