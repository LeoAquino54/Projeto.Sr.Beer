import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrocomercioPage } from './cadastrocomercio.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrocomercioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrocomercioPageRoutingModule {}
