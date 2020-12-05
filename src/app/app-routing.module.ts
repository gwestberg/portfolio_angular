import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/pages/home/home.component";
import { AboutComponent } from "./components/pages/about/about.component";
import { BlogComponent } from "./components/pages/blog/blog.component";
import { ProjectsComponent } from './components/pages/projects/projects.component';


const routes: Routes = [
  {path:"", component: HomeComponent},
  { path: "about", component: AboutComponent },
  { path: "blog", component: BlogComponent },
  { path: "projects", component: ProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
