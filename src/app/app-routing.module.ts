import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'table-form',
    loadChildren: () => import('./pages/table-info/table-info.module').then( m => m.TableInfoPageModule)
  },
  {
    path: '',
    redirectTo: 'table-form',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
