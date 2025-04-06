import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage implements OnInit{

  user: any = '';

  constructor(
    private auth: Auth
  ) {}

  ngOnInit(): void {
    this.user = this.auth.currentUser ? this.auth.currentUser?.email : 'No se inicio sesion';
    console.log(this.auth.currentUser);
  }

}
