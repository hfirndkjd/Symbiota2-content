import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Auth } from '../../../classes/auth';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'symbiota-dashboard-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  infoForm!: FormGroup;
  passwordForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.infoForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',
    });

    this.passwordForm = this.formBuilder.group({
      password: '',
      passwordConfirm: '',
    });

    Auth.userEmitter.subscribe((user) =>
      this.infoForm.patchValue({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      })
    );
  }

  infoSubmit(): void {
    this.authService
      .updateInfo(this.infoForm.getRawValue())
      .subscribe((user) => Auth.userEmitter.emit(user));
  }

  passwordSubmit(): void {
    this.authService
      .updatePassword(this.passwordForm.getRawValue())
      .subscribe((res) => console.log(res));
  }
}
