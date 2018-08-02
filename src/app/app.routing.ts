import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './login/index';
import {ProtectedComponent} from './protected/index';
import {PublicComponent} from './public/index';
import {AuthGuard} from './_guards/index';
import {ExampleComponent} from './example/index';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'example', component: ExampleComponent},
  {path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard]},
  {path: '', component: PublicComponent},
  // otherwise redirect to public
  {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);
