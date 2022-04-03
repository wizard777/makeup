import { AbstractControl,ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';

export class CustomValidators {
    constructor() { }

    static cannotContainsSpace(control: AbstractControl): ValidationErrors | null {
      
        if ( (control.value as string).indexOf(' ') >= 0 )
        { return {cannotContainsSpace: true} }

        return null;
    }

    static hasUpper(control: AbstractControl): ValidationErrors | null {
        const upper = /[A-Z]/.test(control.value);
        if (!upper) {
            return { hasUpper: true };
        }
        return null;
    }

    static hasNumber(control: AbstractControl): ValidationErrors | null {
        const oneNum = /\d/.test(control.value);
        if (!oneNum) {
            return { hasNumber: true };
        }
        return null;
    }

    static onlyNumber(control: AbstractControl): ValidationErrors | null {
        const intigerNumber = /^[0-9]\d*$/.test(control.value);
        if (!intigerNumber) {
            return { onlyNumber: true };
        }
        return null;
    }


    static email(control: AbstractControl): ValidationErrors | null {
        const emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(control.value);
        if (!emailPattern) {
            return { email: true };
        }
        return null;
    }

    // static onlyChar(): ValidatorFn {
    //     return (control: AbstractControl): { [key: string]: boolean } | null => {
    //         if (control.value == '') return null;

    //         let re = new RegExp('^[a-zA-Z ]*$');
    //         if (re.test(control.value)) {
    //             return null;
    //         } else {
    //             return { onlyChar: true };
    //         }
    //     };
    // }
    static mustMatch(controlName: string, matchingControlName: string) {
        return (formGroup: FormGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];

            if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                return;
            }
            // set error on matchingControl if validation fails
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ mustMatch: true });
            } else {
                matchingControl.setErrors(null);
            }
            return null;
        };
    }
}