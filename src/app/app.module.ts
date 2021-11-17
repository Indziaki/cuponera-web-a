import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { PublicModule } from './public/public.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBFyxxAqhdqUq-qjqUigrUrzPEPusG_xLg",
  authDomain: "gasapp-1541040572916.firebaseapp.com",
  databaseURL: "https://gasapp-1541040572916.firebaseio.com",
  projectId: "gasapp-1541040572916",
  storageBucket: "gasapp-1541040572916.appspot.com",
  messagingSenderId: "42018802509",
  appId: "1:42018802509:web:b0ce87353c9f60911bc504"
  };
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    PublicModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
