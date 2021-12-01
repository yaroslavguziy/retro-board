import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { LoginModule } from './components/login/login.module';
import { ToastrModule } from 'ngx-toastr';
import { HeaderModule } from './header/header.module';
import { BoardModule } from './board/board.module';

import { SignupComponent } from './components/signup/signup.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';

@NgModule({
  imports: [
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HeaderModule,
    BoardModule,
    LoginModule,
    FormsModule,
  ],
  declarations: [AppComponent, SignupComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
