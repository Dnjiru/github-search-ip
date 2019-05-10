import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms'
import { RouterModule, } from '@angular/router' ;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReposComponent } from './repos/repos.component';
import { UsersComponent } from './users/users.component';
import { LastPipe } from './pipe/last.pipe';
import { FontDirective } from './font-directive/font.directive';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ReposComponent,
    UsersComponent,
    LastPipe,
    FontDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    RouterModule, 
    

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
