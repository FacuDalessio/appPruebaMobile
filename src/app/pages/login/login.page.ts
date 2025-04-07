import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonText, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { UserService } from 'src/app/servicios/usuer.service';
import { LoginRequestDTO } from './model/loginRequestDTO';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonInput,
    IonLabel,
    IonItem,
    IonText,
    IonButton
  ]
})
export class LoginPage implements OnInit {

  loginForm!: FormGroup<LoginRequestDTO>;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  login(){
    if(this.loginForm.valid){
      const { email, password } = this.loginForm.value;
      this.userService.login(email!, password!)
      .then(userCredential => {
        this.userService.usuarioLogeado = userCredential.user.email;
        this.router.navigate(['/']);
      })
      .catch(error => {
        console.error('Error de login', error.message);
      });
    }
  }

}
