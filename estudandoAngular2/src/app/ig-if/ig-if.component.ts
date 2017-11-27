import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ig-if',
  templateUrl: './ig-if.component.html',
  styleUrls: ['./ig-if.component.css']
})
export class IgIfComponent implements OnInit {
  verNome:boolean;
  cursos:string [] = [];
  constructor() { }

  ngOnInit() {
  }

  getValor():boolean {
    return this.verNome;
  }

  mostrar():void {
    this.verNome = !this.verNome;
  }

  addCurso():void {
    this.cursos.push("Angular 2");
  }
}
