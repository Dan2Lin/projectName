import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DirectiveComponent } from './directive/directive.component';
import { DataBindComponent } from './dataBind/data-bind.component';
import {UserServiceService} from './service/user-service.service';
import {RouterModule, Routes} from '@angular/router';
import { RouterComponent } from './router/router.component';
import { BComponent } from './b/b.component';
import { AComponent } from './a/a.component';
import { PagenotfontComponent } from './pagenotfont/pagenotfont.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  { path: 'a', component: AComponent},
  { path: 'b/:id', component: BComponent},
  { path: 'home', component: AppComponent},
  /*通配路由，处理错误页面*/
  { path: '**', component: PagenotfontComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DirectiveComponent,
    DataBindComponent,
    RouterComponent,
    BComponent,
    AComponent,
    PagenotfontComponent,
    FormComponent,
    ReactiveFormComponent
    ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserServiceService , FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
