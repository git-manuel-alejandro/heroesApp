import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthModule,
    LoginComponent,
    RegistroComponent

  ]
})
export class AuthModule { }
