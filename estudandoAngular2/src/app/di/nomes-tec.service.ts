import { Injectable } from '@angular/core';
import {MeuLogService} from './meu-log.service';

@Injectable()
export class NomesTecService {

  constructor(private meuLog:MeuLogService) { }

  getNomesTec():string[] {

    if(this.meuLog)
      this.meuLog.setLog('Consultou o array de tecnologias');
    return ['Angular 2', 'TypeScript', 'JavaScript', 'HTML', 'CSS3', 'Desenvolvendo com Angular 2'];
  }
  
}
