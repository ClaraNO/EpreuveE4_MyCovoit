import { Component } from '@angular/core';
import { AngularFireDatabase, snapshotChanges } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';//Récupérer les trajets
import { Observable } from 'rxjs';//Récupérer les trajets
import { Router } from '@angular/router';//Récupérer les trajets
import { transform } from 'typescript';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  items: Observable<any[]>;//Récupérer les trajets

  listeTrajets = [];

  constructor(public firestore: AngularFirestore,//Récupérer les trajets
    public afDB: AngularFireDatabase,//Récupérer les trajets
    public afSG: AngularFireStorage,//Récupérer les trajets
  ) {
    this.items= this.firestore.collection('Items').valueChanges();//Récupérer les trajets
  }

  getTrajet(){
    var that = this;

    this.listeTrajets = [];
    this.items.subscribe(tra => {
      tra.forEach(value1 => {
        if (value1 ["depart"] != ""){
          that.listeTrajets = value1
        }
    })
    });
  }
}
