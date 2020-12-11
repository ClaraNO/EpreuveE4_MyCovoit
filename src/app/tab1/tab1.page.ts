import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    public afDB: AngularFireDatabase,
    public firestore: AngularFirestore
    ) {}

    add() {
      this.firestore.collection('Users').add({
        pseudo: 'drissas'
      });
    }

}

