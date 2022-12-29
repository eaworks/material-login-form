import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
  createUserForm = new FormGroup({
    firstName: new FormControl(null, [Validators.required]),
    lasttName: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    repassword: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    address: new FormControl(null, [Validators.required]),
  })

}
