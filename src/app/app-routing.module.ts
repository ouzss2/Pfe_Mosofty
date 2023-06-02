import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './authentication/login-page/login-page.component';

import { ContentStyleComponent } from './shared/components/layouts/content-style/content-style.component';
import { ContentComponent } from './shared/components/layouts/content/content.component';
import { FullContentComponent } from './shared/components/layouts/full-content/full-content.component';
import { content } from './shared/routes/content-routes';
import { custom_style } from './shared/routes/custom-content-routes';
import { full } from './shared/routes/full-content-routes';
import {missions} from './shared/routes/missions-routes';

const routes: Routes = [
   { path: '', redirectTo:'auth/login', pathMatch: 'full'},
  { path: 'auth/login', component: LoginPageComponent },
  { path: '', component: ContentComponent, children: content },
  { path: '', component: FullContentComponent, children: full },
  { path: '', component: ContentStyleComponent, children: custom_style },
 
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [[RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
