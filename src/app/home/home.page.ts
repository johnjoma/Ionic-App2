import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { AgreeModalComponent } from '../agree-modal/agree-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  agreements = [
    {
      name:'Apply Now',
      
    }
  ];

  constructor( private modalCtrl: ModalController) { }

  async openModal(){
    const modal = await this.modalCtrl.create({
component: AgreeModalComponent
    });

    await modal.present();
  }
 

}
