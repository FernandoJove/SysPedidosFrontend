import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SysPedidosLayoutComponent } from './pages/sys-pedidos-layout/sys-pedidos-layout.component';

const routes: Routes = [
  {
    path:'', component:SysPedidosLayoutComponent
    
  },{
    path:'usuario',component:SysPedidosLayoutComponent
  },{
    path:'pedidos',component:SysPedidosLayoutComponent
  },{
    path:'menu',component:SysPedidosLayoutComponent
  },{
    path:'empresa',component:SysPedidosLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
