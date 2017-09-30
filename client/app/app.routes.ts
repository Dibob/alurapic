import { RouterModule, Routes } from '@angular/router';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FotoListComponent } from './listagem/foto-list.component';



const appRoutes: Routes  = [
  { path: '', component: FotoListComponent },
  { path: 'cadastro', component: CadastroComponent },  
  { path: 'cadastro/:id', component: CadastroComponent },  
  { path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);
