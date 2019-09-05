import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DataComponent } from './components/data/data.component';
import { TemplateComponent } from './components/template/template.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'data', component: DataComponent },
  { path: 'template', component: TemplateComponent },
  { path: '**', component: HomeComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
