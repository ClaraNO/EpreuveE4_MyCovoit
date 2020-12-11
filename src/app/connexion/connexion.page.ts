import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.mode';
import {LoadingController, NavController, ToastController} from '@ionic/angular';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {
  user = {} as User;
  constructor(
      private toastCtrl: ToastController,
      private loadingCtrl: LoadingController,
      private afAuth: AngularFireAuth,
      private navCtrl: NavController) { }

  ngOnInit() {
  }

  async login(user: User){
    if (this.formValidation()){
      const loader = this.loadingCtrl.create({
        message: 'Veuillez patienter...'
      });
      await (await loader).present();

      // try {
      //   await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password).then(data => {
      //     console.log(data);
      //
      //     this.navCtrl.navigateRoot('/tabs/accueil');
      //   });
      // }
      // catch (e) {
      //   this.showToast(e);
      // }
    }
  }

  formValidation(){
    if (!this.user.email){
      this.showToast('Saisir une adresse mail.');
      return false;
    }
    if (!this.user.password){
      this.showToast('Saisir un mot de passe.');
      return false;
    }

    return true;
  }

  showToast(message: string){
    this.toastCtrl
        .create({
          message,
          duration: 3000,
        })
        .then(toastData => toastData.present());
  }

}
