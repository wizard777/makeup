import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { CustomValidators } from '../../providers/custom.validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userForm = new FormGroup(
    {
      username: new FormControl('',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(15),
          CustomValidators.cannotContainsSpace
        ]),
      password: new FormControl('',
        [
          Validators.required,
          Validators.minLength(8),
          CustomValidators.hasUpper,
          CustomValidators.hasNumber
        ]),
      confirmPassword: new FormControl('', [
        Validators.required
      ]),

      phone: new FormControl('',
        [Validators.required,
        CustomValidators.onlyNumber
        ]),
      email: new FormControl('',
        [
          Validators.required,
          CustomValidators.email
        ]),

    },
    CustomValidators.mustMatch('password', 'confirmPassword')
  );

  get username() {
    return this.userForm.get('username');
  }
  get password() {
    return this.userForm.get('password')
  }

  get confirmPassword() {
    return this.userForm.get('confirmPassword')
  }

  get phone() {
    return this.userForm.get('phone');
  }

  get email() {
    return this.userForm.get('email');
  }

  constructor() { }

  ngOnInit(): void {
  }

  get getForm() {
    return this.userForm.controls
  }

  onReset() {
    this.userForm.reset(
         {
        username: '',
         phone: '',
         email: '',
         password:'',
         confirmPassword: ''
       }
    )
  }

  onSubmit() {
    if (!this.userForm.valid) {
      return;
    }
   
    alert('SUCCESS!!\n\n' + JSON.stringify(this.userForm.value, null, 8 )
    )
    this.onReset();
  }
}
