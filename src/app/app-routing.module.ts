import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LoginService} from './login/login.service';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ProdutoComponent} from './produto/produto.component';
import { SetorComponent } from './setor/setor.component';
import { CargoComponent } from './cargo/cargo.component';

import {PerfilComponent} from './perfil/perfil.component';

import {CcustoComponent} from './ccusto/ccusto.component';


const routes: Routes = [
  {
    path: '', canActivate: [LoginService], children: [
      {path: '', component: HomeComponent},
      {path: 'produto', component: ProdutoComponent},
      {path: 'perfil', component: PerfilComponent},
      {path: 'ccusto', component: CcustoComponent},

      {path: 'setor', component: SetorComponent},
      {path: 'cargo', component: CargoComponent},

    ]
  },
  {path: 'login', component: LoginComponent}
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);
