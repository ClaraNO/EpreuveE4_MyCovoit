import {Component, OnInit} from '@angular/core';
import {LoadingController, ToastController, NavController} from '@ionic/angular';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {Trajet} from '../models/trajet.model';
import {Observable} from 'rxjs';




@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page{
  trajets: Observable<any[]>;
  constructor(
      private firestore: AngularFirestore
  )
  {
    this.trajets = firestore.collection('Trajet').valueChanges();
  }
}
