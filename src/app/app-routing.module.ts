import { PageredirectionComponent } from './pageredirection/pageredirection.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagePresentationComponent } from './page-presentation/page-presentation.component';

const routes: Routes = [
  {path:"page-presentation", component:PagePresentationComponent}, {path:"pageredirection", component:PageredirectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
