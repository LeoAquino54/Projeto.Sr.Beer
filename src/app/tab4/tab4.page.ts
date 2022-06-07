import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UsuarioService } from '../Services/usuario.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  usuario={
    Email_Usuario:'',
    Senha_Usuario:''
  }
  constructor(private usuarioService:UsuarioService, private navController: NavController) {}

  ngOnInit(): void {
    
  }

  login() {
    this.usuarioService.login(this.usuario).subscribe(res=>{
      console.log(res)
    })
  }
}

