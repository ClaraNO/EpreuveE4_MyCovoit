import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-accueil',
  templateUrl: 'accueil.page.html',
  styleUrls: ['accueil.page.scss']
})
export class AccueilPage {

  trajets: Observable<any[]>;

  constructor(
      public firestore: AngularFirestore
  ) {
    this.trajets = this.firestore.collection('Trajets').valueChanges();
  }

}
