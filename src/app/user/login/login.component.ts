import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  loginForm: FormGroup;
  user: User;
  userSubmitted: boolean;
  constructor(private fb: FormBuilder,
              private userService: UserService) { }

  ngOnInit() {

    this.createLoginForm();
    
  }

  createLoginForm() {
    this.loginForm =  this.fb.group({
      userName: [null, Validators.required],
  
      password: [null, [Validators.required, Validators.minLength(8)]],
    });
  }

 


  
  onSubmit() {
    console.log(this.loginForm.value);
    this.userSubmitted = true;

    if (this.loginForm.valid) {
      // this.user = Object.assign(this.user, this.registerationForm.value);
      this.userService.addUser(this.userData());
      this.onReset();
    
  } 

  }

  onReset() {
    this.userSubmitted = false;
    this.loginForm.reset();
  }


  userData(): User {
    return this.user = {
      userName: this.userName.value,

      password: this.password.value,
    }
  }
  get userName() {
    return this.loginForm.get('userName') as FormControl;
  }

  get password() {
    return this.loginForm.get('password') as FormControl;
  }
  


}