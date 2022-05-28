import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrocomercioPageRoutingModule } from './cadastrocomercio-routing.module';

import { CadastrocomercioPage } from './cadastrocomercio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrocomercioPageRoutingModule
  ],
  declarations: [CadastrocomercioPage]
})
export class CadastrocomercioPageModule {}
