import { Component, OnInit } from '@angular/core';
import { ContratosService } from '../services/contratos.service';
import { Contrato } from '../domain/contrato';

@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.component.html',
  styleUrls: ['./contrato.component.css']
})
export class ContratoComponent implements OnInit {

  contratos : Contrato[]; //Armazena os contratos do servidor remoto

  constructor(private contatroService: ContratosService) { 
    this.getContratos();
  }

  ngOnInit() {
  }

  getContratos(){
    this.contatroService.getContratos()
    .subscribe(response => {
      //Recebe JSON
      this.contratos = response;
      console.log(response);
    })
  }

}
