import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanLoad, CanActivate } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { ErrorComponent } from './shared/error/error.component';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'heroes', loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule), canLoad: [AuthGuard] },
  { path: '404', component: ErrorComponent },
  { path: '**', redirectTo: '404' }
]



@NgModule({

  imports: [
    RouterModule.forRoot(routes)

  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
