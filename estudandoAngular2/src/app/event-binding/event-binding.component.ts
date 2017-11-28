import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  isClick:boolean;
  habilitarBotao:boolean = false;
  valores:string[] = [];
  idade:number;

  constructor() { }

  ngOnInit() {
  }

  digitou($event):void{
    console.log($event);
  }

  meuClick():void{
    console.log('Esta clicado: ' + (this.isClick = !this.isClick));
  }

  digitouVarTemplate(valor):void {
    console.log(valor);
  }

  validaSenha(valor:string):void {
    if(valor.length >= 5)
      this.habilitarBotao = true;
    else
      this.habilitarBotao = false;
  }

  gravarSenha(valor:string):void {
   alert('Senha salva com sucesso: ' + valor);
  }

  adicionar(valor:string):void {
    this.valores.push(valor);
  }

  verIdade(valor):void {
    let ano = new Date;

    this.idade = ano.getFullYear() - valor;
  }
}
