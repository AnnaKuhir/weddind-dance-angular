import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginModel } from '../models/login-user.model';
import { UserService } from '../service/user-service';
import { UserToken } from '../models/user-token.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  public form: FormGroup;

  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', Validators.compose([Validators.email, Validators.required])),
      password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(8)])),
    }); 
  }

  submit() {
    debugger;
    const formData = this.form.value as LoginModel;
    this.form.reset();
    this.userService.login(formData).subscribe((token: UserToken) => {
      localStorage.setItem('user-token', JSON.stringify(token))
    });
    
  }
}
