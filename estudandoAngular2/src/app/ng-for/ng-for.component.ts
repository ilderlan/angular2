import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  pessoas:any[] = [
    {id:1, nome:'Ilderlan'}, 
    {id:2, nome:'Vando'}, 
    {id:3, nome:'Helber'}, 
    {id:4, nome:'Josiel'}, 
    {id:5, nome:'João'}, 
    {id:6, nome:'Francis'}];

  constructor() { }

  ngOnInit() {
  }

  meuSalve(index:number, nomes:any):any {
    return nomes.id
  }

  atualizar():void{
    this.pessoas = [
    {id:1, nome:'Ilderlan'}, 
    {id:2, nome:'Vando'}, 
    {id:3, nome:'Helber'}, 
    {id:4, nome:'Raquel'}, 
    {id:5, nome:'João'}, 
    {id:6, nome:'Francis'}];
  }
}
