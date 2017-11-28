import { Component, OnInit, Optional } from '@angular/core';

import {NomesTecService} from './nomes-tec.service';
import {MeuLogService} from './meu-log.service';
import {AlertaService} from '../alerta.service';

@Component({
  selector: 'app-di',
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.css'],
  providers: [NomesTecService, MeuLogService]
})
export class DiComponent implements OnInit {

  tecnologias:string[] = [];
  
  constructor(private meuService:NomesTecService, @Optional() meuLog:MeuLogService, private alerta:AlertaService) { 
    this.tecnologias = this.meuService.getNomesTec();
    this.alerta.msAlerta();
  }

  ngOnInit() {
  }

}
