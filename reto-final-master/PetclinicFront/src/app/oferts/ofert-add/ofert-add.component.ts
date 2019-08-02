import { Component, OnInit } from '@angular/core';
import {Ofert} from '../ofert';
import {Router} from '@angular/router';
import { OfertService } from '../oferts.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ofert-add',
  templateUrl: './ofert-add.component.html',
  styleUrls: ['./ofert-add.component.css']
})
export class OfertAddComponent implements OnInit {

  ofert: Ofert;
  errorMessage: string;
  public ofertForm : FormGroup = new FormGroup({
    discount : new FormControl('',[Validators.min(0), Validators.max(100)] )
  })

  constructor(private ofertService: OfertService, private router: Router) {
    this.ofert = <Ofert>{};
  }

  ngOnInit() {
  }

  onSubmit(ofert: Ofert) {
    ofert.id = null;
    this.ofertService.addOfert(ofert).subscribe(
      new_ofert => {
        this.ofert = new_ofert;
        this.gotoOfertsList();
      },
      error => this.errorMessage = <any>error
    );
  }

  gotoOfertsList() {
    this.router.navigate(['/oferts']);
  }
}
