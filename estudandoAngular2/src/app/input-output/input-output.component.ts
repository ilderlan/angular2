import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {

  @Input() menu:string;
  @Output() nomeClicado = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

   enviarNome(valor):void {
    this.nomeClicado.emit(valor);
  }
}
