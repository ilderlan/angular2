import { Injectable, EventEmitter } from '@angular/core';
import {ContatoModel} from '../modelos/contato-model';

@Injectable()
export class ContatosDataBaseService {
  
  meusContatos:ContatoModel[] = [];
  enviarContato = new EventEmitter();

  constructor() { }

  setContato(novoContato:ContatoModel){
    this.meusContatos.push(novoContato);
    this.enviarContato.emit(this.meusContatos);
  }

  getContato(id:number){
    
    let contato:ContatoModel;
    
    contato = this.meusContatos[id]
    
    return contato;
  }

}
