import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonLabel, IonItem, IonText, IonButton } from '@ionic/angular/standalone';
import { LoginRequestDTO } from './model/loginRequestDTO';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';

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
    private auth: Auth,
    private router: Router,
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
      signInWithEmailAndPassword(this.auth, email!, password!)
      .then(userCredential => {
        this.router.navigate(['/']);
      })
      .catch(error => {
        console.error('Error de login', error.message);
      });
    }
  }

}
