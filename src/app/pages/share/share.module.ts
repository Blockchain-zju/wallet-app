import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {SharePage} from './share.page';
import {QRCodeModule} from 'angularx-qrcode';
import {PhotoLibrary} from '@ionic-native/photo-library/ngx';


const routes: Routes = [
  {
    path: '',
    component: SharePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRCodeModule,
    RouterModule.forChild(routes)
  ],
  providers: [PhotoLibrary],
  declarations: [SharePage]
})
export class SharePageModule {
}
