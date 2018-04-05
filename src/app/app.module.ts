import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ContratoComponent } from './contrato/contrato.component';
import { ContratosService } from './services/contratos.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlunoComponent } from './aluno/aluno.component';
import { AlunoService } from './services/aluno.service';


@NgModule({
  declarations: [
    AppComponent,
    ContratoComponent,
    AlunoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ContratosService, AlunoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
