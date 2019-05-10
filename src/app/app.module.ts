import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingModule } from './routing/routing.module'
import { FormsModule } from '@angular/forms'
// Defining routes
// const routes:Routes=[
//   {path:"users",component:UsersComponent},
//   {path:"repos",component:ReposComponent},
//   {path:"",redirectTo:"/users",pathMatch:"full"},
//   {path:'**',component:NotFoundComponent}
// ]
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ReposComponent } from './repos/repos.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DataService } from './services/data.service';
import { HttpModule } from '@angular/http';
import { FontDirective } from './font-directive/font.directive';
import { LastPipe } from './pipe/last.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ReposComponent,
    NotFoundComponent,
    FontDirective,
    LastPipe
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpModule,
    FormsModule

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
