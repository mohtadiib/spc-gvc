import {Component, OnInit} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit{
  validateForm!: UntypedFormGroup;
  constructor(
    private fb: UntypedFormBuilder,
    public authService:AuthService,
    private router: Router
  ) {}

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log(this.validateForm.value);
      this.authService.login(this.validateForm.value).subscribe((value:any) => {
        console.log(value)
        if (value.msg == "success"){
          this.authService.setToken(value.user.doc_id)
          console.log(this.authService.getToken())
          this.router.navigate(['/']);
        }
      })
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      phone: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }
}
