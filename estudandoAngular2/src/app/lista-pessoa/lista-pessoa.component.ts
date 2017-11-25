import { Component, OnInit } from '@angular/core';
import { PessoaServiceService } from 'app/lista-pessoa/pessoa-service.service';

@Component({
  selector: 'app-lista-pessoa',
  templateUrl: './lista-pessoa.component.html',
  styleUrls: ['./lista-pessoa.component.css'],
  providers: [PessoaServiceService]
})
export class ListaPessoaComponent implements OnInit {

  pessoas:String[];
  nome:String = "Priscila Maia";
  constructor(private service:PessoaServiceService) {
    this.pessoas = service.getPessoas();
  }

  ngOnInit() {
  }
  enviarNome():void{
    this.service.setPessoa(this.nome);
  }
  listar(){
  }
}
