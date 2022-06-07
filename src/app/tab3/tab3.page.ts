import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../Services/cliente.service';
import { ProdutoService } from '../Services/produto.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  cliente: any = {
    Nome_Usuario: '',
    Email_Usuario: '',
    Senha_Usuario: '',
  };
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {

  }

  salvarCLiente() {
    console.log(this.cliente)
    this.clienteService.salvaCliente(this.cliente).subscribe(res => {
      console.log('Salvo com Sucesso!')
    })
  }


}

