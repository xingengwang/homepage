import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import * as firebase from 'firebase';

if (environment.production) {
  enableProdMode();
}

const config = {
    apiKey: 'AIzaSyB3QT_QOIDU3zdU2xDgY-xaQlmVumVZtbw',
    authDomain: 'omepage-b1b17.firebaseapp.com',
    databaseURL: 'https://omepage-b1b17.firebaseio.com',
    projectId: 'omepage-b1b17',
    storageBucket: 'omepage-b1b17.appspot.com',
    messagingSenderId: '760169229260'
};
firebase.initializeApp(config);

platformBrowserDynamic().bootstrapModule(AppModule);
