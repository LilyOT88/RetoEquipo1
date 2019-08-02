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

import {Component, OnInit} from '@angular/core';
import {OfertService} from '../oferts.service';
import {Ofert} from '../ofert';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/Rx';

@Component({
  selector: 'app-ofert-edit',
  templateUrl: './ofert-edit.component.html',
  styleUrls: ['./ofert-edit.component.css']
})
export class OfertEditComponent implements OnInit {
  ofert: Ofert;
  errorMessage: string; // server error message

  constructor(private ofertService: OfertService, private route: ActivatedRoute, private router: Router) {
    this.ofert = <Ofert>{};
  }

  ngOnInit() {
    const ofertId = this.route.snapshot.params['id'];
    this.ofertService.getOfertById(ofertId).subscribe(
      ofert => this.ofert = ofert,
      error => this.errorMessage = <any> error);
  }

  onSubmit(ofert: Ofert) {
    var that = this;
    this.ofertService.updateOfert(ofert.id.toString(), ofert).subscribe(
      res => this.gotoOfertDetail(ofert),
      error => this.errorMessage = <any> error
    )
  }

  gotoOfertDetail(ofert: Ofert) {
    this.errorMessage = null;
    this.router.navigate(['/oferts', ofert.id]);
  }



}
