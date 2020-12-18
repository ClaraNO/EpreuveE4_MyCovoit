import {Component, OnInit} from '@angular/core';
import {LoadingController, ToastController, NavController} from '@ionic/angular';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {Trajet} from '../models/trajet.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  trajet = {} as Trajet;

  constructor(
      private toastCtrl: ToastController,
      private loadingCtrl: LoadingController,
      private afAuth: AngularFireAuth,
      private firestore: AngularFirestore,
      private navCtrl: NavController
  ) {}

  ngOnInit() {}

  async createTrajet(trajet: Trajet) {
    // console.log(post);

    if (this.formValidation()) {
      // console.log("ready to submit");

      // show loader
      const loader = this.loadingCtrl.create({
        message: 'Veuillez patienter...'
      });
      await (await loader).present();

      try {
        await this.firestore.collection('Trajet').add(trajet);
      } catch (e) {
        this.showToast(e);
      }

      // dismiss loader
      await (await loader).dismiss();

      // redirect to home page
      this.navCtrl.navigateRoot('tabs/tab1');
    }
  }

  formValidation() {
    if (!this.trajet.Tra_Heure_Arrivee) {
      // show toast message
      this.showToast('Entrez un lieu de départ');
      return false;
    }

    if (!this.trajet.Tra_Heure_Depart) {
      // show toast message
      this.showToast('Entrez un lieu d\'arrivée');
      return false;
    }

    return true;
  }

  showToast(message: string) {
    this.toastCtrl
        .create({
          message,
          duration: 3000
        })
        .then(toastData => toastData.present());
  }
}
