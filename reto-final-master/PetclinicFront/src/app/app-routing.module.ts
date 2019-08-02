/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */

/**
 * @author Vitaliy Fedoriv
 */

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './parts/page-not-found/page-not-found.component';

import {WelcomeComponent} from './parts/welcome/welcome.component';
import { OfertListComponent } from './oferts/ofert-list/ofert-list.component';
import { OfertAddComponent } from './oferts/ofert-add/ofert-add.component';
import { OfertDetailComponent } from './oferts/ofert-detail/ofert-detail.component';
import { OfertEditComponent } from './oferts/ofert-edit/ofert-edit.component';


const appRoutes: Routes = [
  {path: 'welcome', component: WelcomeComponent},

  {path: 'oferts', component: OfertListComponent},
  {path: 'oferts/add', component: OfertAddComponent},
  {path: 'oferts/:id', component: OfertDetailComponent},
  {path: 'oferts/:id/edit', component: OfertEditComponent},
  {path: '', component: WelcomeComponent},
  {path: '**', component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
