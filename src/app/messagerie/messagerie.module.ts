import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageriePage } from './messagerie.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MessageriePageRoutingModule } from './messagerie-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    MessageriePageRoutingModule
  ],
  declarations: [MessageriePage]
})
export class MessageriePageModule {}
