import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  params = {
    id: 0,
    name: 'string',
    email: 'string',
    gender: 'string',
    password: 'string',
  };

  get f() {
    return this.loginForm.controls;
  }

  onLoginSubmit() {
    this.params.email = this.loginForm.value.email;
    this.params.password = this.loginForm.value.password;
    console.log(JSON.stringify(this.params));
    this.http
      .post<any>('http://localhost:55887/api/login', this.params)
      .subscribe(
        (res) => {
          console.log(res);
          this.loginForm.reset();
          this.router.navigate(['./post-list']);
        },
        (err) => {
          console.log(err);
          alert('User Does not Exist');
        }
      );
  }
}
