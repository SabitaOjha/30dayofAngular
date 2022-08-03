import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './About/About.component';
import { BlogComponent } from './Blog/Blog.component';
import { ContactComponent } from './Contact/Contact.component';
import { HomeComponent } from './Home/Home.component';
import { NotFoundComponent } from './NotFound/NotFound.component';
import { ProjectsComponent } from './Projects/Projects.component';

const routes: Routes = [
  {
    path: 'Home', component: HomeComponent
  },
  {
    path: 'About', component: AboutComponent
  },
  {
    path: 'Projects', component: ProjectsComponent
  },
  {
    path: 'Blog', component: BlogComponent
  },
  {
    path: 'Contact', component: ContactComponent
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const components = [HomeComponent,AboutComponent,ProjectsComponent,
                            BlogComponent, ContactComponent,NotFoundComponent]
