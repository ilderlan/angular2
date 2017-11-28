import { Component, OnInit } from '@angular/core';
import {Contatos} from './contatos';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {
  contato = new Contatos('Ilderlan', '(61) 99226-7159', 'ilderlan.pinho@gmail.com');

  constructor() { }

  ngOnInit() {
  }

  enviarDados():void{
    alert(this.contato.nome);
    alert(this.contato.telefone);
    alert(this.contato.email);
  }
}
