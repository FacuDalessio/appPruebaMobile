import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonHeader } from '@ionic/angular/standalone';
import { NavBarPage } from "./pages/nav-bar/nav-bar.page";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonHeader, IonApp, IonRouterOutlet, NavBarPage],
})
export class AppComponent {
  constructor() {}
}
