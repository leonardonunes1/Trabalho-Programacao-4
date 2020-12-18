import { Component, OnInit, OnChanges } from '@angular/core';
import { Curso } from '../../curso';
import { CursoService } from '../../curso.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit,OnChanges {
  titulo = "Tabela de Cursos";
  preco: number;
  cursos: Curso[] = [];


  constructor(
    private cursoService: CursoService,
    private router: Router
    //private cursoService: CursoService
    ) { }

  ngOnInit() {
    
    //this.cursos = this.cursoService.listar();
    this.listar();
  }
  
  ngOnChanges() {
    console.log("Atualizando lista");
    //this.cursos = this.cursoService.listar();
    this.listar();
  }

  listar(){
    this.cursoService.listar().subscribe(
      data => {
        this.cursos = data;
      },
      error => alert("Error "+error)
    );
  }

  deletar(id: number){
    //this.cursoService.deletar(id);
    this.cursoService.deletar(id).subscribe(res => {
      console.log(res);
      this.listar();

    }, err => {
      console.error("Erro: "+err);
    });
  }


}
