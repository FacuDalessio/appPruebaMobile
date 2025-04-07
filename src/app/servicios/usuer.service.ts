import { Injectable } from "@angular/core";
import { Auth, signInWithEmailAndPassword, signOut } from "@angular/fire/auth";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    usuarioLogeado: any;

  constructor(
    private auth:Auth
  ) { }

  async login(email: string, password: string){
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  getUserLogeado(){
    return this.auth.currentUser;
  }

  logOut(){
    this.usuarioLogeado = null;
    return signOut(this.auth);
  }
}