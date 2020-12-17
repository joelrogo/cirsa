import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: (): any =>
      import('@app/features/layout/layout.module').then(
        (load) => load.LayoutModule
      ),
  },
  {
    path: '404',
    loadChildren: (): any =>
      import('@core/components/not-found/not-found.module').then(
        (load) => load.NotFoundModule
      ),
    data: { animation: "NotFound" }
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
