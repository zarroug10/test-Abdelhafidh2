import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { PostItemComponent } from './post-item/post-item.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
  {path: 'post-list', component: PostListComponent},
  {path: 'post-item', component: PostItemComponent},
  {path: 'authentification', component: AuthentificationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
