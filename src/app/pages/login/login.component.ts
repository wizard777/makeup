import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlDirective, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/providers/custom.validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  //userLogin:FormGroup
  // username;
  // password;

  constructor() { 

  }
  userLogin = new FormGroup({
    username: new FormControl('', [
      Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15),
        CustomValidators.cannotContainsSpace
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      CustomValidators.hasUpper,
      CustomValidators.hasNumber
    ])

  })

  get username() {
    return this.userLogin.get('username');
  }
  get password() {
    return this.userLogin.get('password')
  }

  ngOnInit(): void {
  }

  onReset() {
    this.userLogin.reset(
         {
         username: '',
         password:'',
       }
    )
  }

  onSubmit() {
    if (!this.userLogin.valid) {
      return;
    }
   
    alert('SUCCESS!!\n\n' + JSON.stringify(this.userLogin.value, null, 3 )
    )
    this.onReset();
  }

}
