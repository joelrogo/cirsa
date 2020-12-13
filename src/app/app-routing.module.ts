import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: (): any =>
      import('@features/auth/auth.module').then(
        (load) => load.AuthModule
      ),
  },
  {
    path: '404',
    loadChildren: (): any =>
      import('@core/components/not-found/not-found.module').then(
        (load) => load.NotFoundModule
      ),
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
