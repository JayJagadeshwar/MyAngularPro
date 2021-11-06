import { IntervalComponent } from './interval/interval.component';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoreComponent } from './core/core.component';
import { MarketComponent } from './market/market.component';
import { MovieComponent } from './movie/movie.component';
import { HeaderComponent } from './header/header.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { AuthComponent } from './auth/auth.component';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParentComponent } from './parent/parent.component';
import { PromisesExComponent } from './promises-ex/promises-ex.component';
import { ObservableComponent } from './observable/observable.component';
import { ListComponent } from './list/list.component';
import { FormEventComponent } from './form-event/form-event.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  //{
  //path : '',
  //redirectTo : 'post-list',
  //pathMatch : 'full'
  //},
  { path: 'login', component:  LoginComponent},
  { path: 'post-add', component: PostEditComponent },
  { path: 'post-edit/:index', component: PostEditComponent },
  { path: 'post-list', component: PostListComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'child', component: ChildComponent },
  {
    path: 'observables',
    component: ObservableComponent,
    children: [
      { path: '', component: ListComponent },
      { path: 'formEvent', component: FormEventComponent },
      { path: 'interval', component: IntervalComponent },
    ],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoreComponent,
    MarketComponent,
    MovieComponent,
    HeaderComponent,
    PostComponent,
    PostListComponent,
    PostEditComponent,
    AuthComponent,
    ChildComponent,
    ParentComponent,
    PromisesExComponent,
    ObservableComponent,
    ListComponent,
    FormEventComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  exports: [MatButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
