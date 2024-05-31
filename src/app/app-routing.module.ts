import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { AppComponent } from './app.component';
import { AuthRegisterComponent } from './Authentication/authRegister/authRegister.component';
import { HomeComponent } from './home/home.component';
import { AuthLoginComponent } from './Authentication/auth-login/auth-login.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
},
{ path: 'home', component: HomeComponent },
{path: 'auth/register', component: AuthRegisterComponent},
{path: 'auth/login', component:AuthLoginComponent},
{path:'updates', component:UpdateComponent},
{ path: '**', redirectTo: 'home', pathMatch: 'full' } // Redirect unknown paths to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }