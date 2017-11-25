import { Injectable } from '@angular/core';

@Injectable()
export class PessoaServiceService {
  nomesPessoas:String [] = ['Ilderlan Pinho', 'Alisson Avelar', 'Fabiana Pamila', 'Reilta Maia'];

  constructor() { }

  getPessoas():String[]{
    return this.nomesPessoas;
  }

  setPessoa(nome:String):void {
    this.nomesPessoas.push(nome);
  }
}
