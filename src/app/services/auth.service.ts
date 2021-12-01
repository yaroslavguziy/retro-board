import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Auth } from '@angular/fire/auth';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from '@firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private fireAuth: Auth) {}
  currentUser?: any;
  private authStatusSub = new BehaviorSubject(this.currentUser);
  currentAuthStatus = this.authStatusSub.asObservable();

  authStatusListener() {
    return onAuthStateChanged(this.fireAuth, (credential) => {
      if (credential) {
        console.log(credential);
        this.authStatusSub.next(credential);
        console.log('User is logged in');
      } else {
        this.authStatusSub.next(null);
        console.log('User is logged out');
      }
    });
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.fireAuth, email, password);
  }

  logout() {
    return signOut(this.fireAuth);
  }

  signup(email: string, password: string) {
    return createUserWithEmailAndPassword(this.fireAuth, email, password);
  }
}
