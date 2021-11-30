//Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Material Modules
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';

//component
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
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { PromisesExComponent } from './promises-ex/promises-ex.component';
import { ObservableComponent } from './observable/observable.component';
import { ListComponent } from './list/list.component';
import { FormEventComponent } from './form-event/form-event.component';
import { IntervalComponent } from './interval/interval.component';
import { LoginComponent } from './login/login.component';
import { FilterRxjsExComponent } from './filter-rxjs-ex/filter-rxjs-ex.component';
import { TeamLeadProfilesComponent } from './team-lead-profiles/team-lead-profiles.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostService } from './post.service';

const routes: Routes = [
  //{
  //path : '',
  //redirectTo : 'post-list',
  //pathMatch : 'full'
  //},
  { path: 'login', component: LoginComponent },
  { path: 'post-add', component: PostEditComponent },
  { path: 'post-edit/:index', component: PostEditComponent },
  { path: 'post-list', component: PostListComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'child', component: ChildComponent },
  { path: 'teamLeads', component: TeamLeadProfilesComponent },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'observables',
    component: ObservableComponent,
    children: [
      { path: '', component: ListComponent },
      { path: 'formEvent', component: FormEventComponent },
      { path: 'interval', component: IntervalComponent },
      { path: 'filter', component: FilterRxjsExComponent },
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
    FilterRxjsExComponent,
    TeamLeadProfilesComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    MatSliderModule,
    MatDividerModule,
    MatListModule,
    MatTableModule,
  ],
  exports: [MatButtonModule, MatCardModule, MatDividerModule, MatListModule],
  providers: [PostService],
  bootstrap: [AppComponent],
})
export class AppModule {}
