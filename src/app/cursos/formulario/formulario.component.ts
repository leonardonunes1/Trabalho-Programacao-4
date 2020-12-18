import { Curso } from '../../curso';
import { CursoService } from '../../curso.service';
import { Component, OnInit } from '@angular/core';
import { Route, Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  titulo = 'Formulário de Cursos';
  curso = new Curso();
  id: number;

  constructor(private apiService: CursoService,
    private service: CursoService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if(this.id){
      this.apiService.buscarPorId(this.id).subscribe(res => {
        this.curso = res;
        console.log(this.curso);
      }, err => { 
        console.error("Erro: "+err);
      });
    }
    else{
      console.log("não tem id");
      this.curso = new Curso();
    }
  }

  salvarCurso(){
    if(this.id){
      //this.service.editar(this.id, this.curso);
      this.apiService.editar(this.id, this.curso).subscribe(res => {
        console.log(this.curso);
        this.router.navigate(['/tabela']);
      }, err => { 
        console.error("Erro: "+err);
      });
    }
    else{
      //this.service.adicionar(this.curso);
      this.apiService.adicionar(this.curso).subscribe(res => {
        alert(this.curso.name+" cadastrado com sucesso!");
        this.router.navigate(['/tabela']);
      }, err => { 
        alert("Erro: "+err);
      });
    }
  }

  cancelar(){
    this.router.navigate(['/tabela']);
  }



}
