import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
firebaseText: string;
firebaseText1: string;
firebaseText2: string;
firebaseDateAller: Date;
firebaseDateRetour: Date;
firebaseHeureAller: Date;
firebaseHeureRetour: Date;
firebaseBouton: Boolean;



  constructor(
    //private router: Router,
    public afDB: AngularFireDatabase,
    public firestore: AngularFirestore,
    ) {}

    add() {
      this.firestore.collection('Users').add({
        pseudo: 'drissas'
      });
    }


    addFirestore() {
      this.firestore.collection('Items').add({
      depart: this.firebaseText,
      arrivee: this.firebaseText1,
      etapes: this.firebaseText2,
      dateAller: this.firebaseDateAller,
      dateRetour: this.firebaseDateRetour,
      heureAller:this.firebaseHeureAller,
      heureRetour:this.firebaseHeureRetour,
      bouton:this.firebaseBouton,

      //var route = this.router,
      //route.navigateByUrl('/tabs/tab2')
      });
    }	


}



