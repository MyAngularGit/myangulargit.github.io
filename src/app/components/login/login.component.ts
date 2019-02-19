import { Component, OnInit, Renderer, OnDestroy } from '@angular/core';
import './login.js';
import { LoginService } from '../../services/login/login.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(private loginService: LoginService,
    private router: Router, private renderer: Renderer) {
    this.renderer.setElementClass(document.body, 'login-layout', true);
  }

  ngOnDestroy() {
    this.renderer.setElementClass(document.body, 'login-layout', false);
  }

  ngOnInit() {
    this.isValidUser = true;
  }

  user = new User();
  isValidUser: boolean;
  

  authenticateUser() {
    event.preventDefault();

    this.loginService.authenticateUser(this.user.LoginName, this.user.Password)
      .subscribe(data => {
        if (data["result"] > 0) {
          this.isValidUser = true;
          this.router.navigate(["home"]);
        }
        else {
          this.isValidUser = false;
        }
      });
    //console.log("test");
  }

  registerUser(){
    this.router.navigate(["home"]);
  }
}
