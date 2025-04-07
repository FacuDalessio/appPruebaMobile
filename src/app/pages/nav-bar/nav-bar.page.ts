import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonToolbar, IonButtons} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { UserService } from 'src/app/servicios/usuer.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.page.html',
  styleUrls: ['./nav-bar.page.scss'],
  standalone: true,
  imports: [IonButtons, IonToolbar, IonButton, CommonModule, FormsModule, RouterLink]
})
export class NavBarPage implements OnInit {

  constructor(
    public userService: UserService
  ) { }

  ngOnInit() {
  }

  logout(){
    this.userService.logOut();
  }

}
