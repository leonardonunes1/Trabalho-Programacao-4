import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';
import { TabelaComponent } from './cursos/tabela/tabela.component';
import { FormularioComponent } from './cursos/formulario/formulario.component';


const appRoutes: Routes = [
  { path: "tabela", component: TabelaComponent },
  { path: "novo", component: FormularioComponent },
  { path: "edit/:id", component: FormularioComponent},
  { path: "", redirectTo:"/tabela", pathMatch:'full' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
