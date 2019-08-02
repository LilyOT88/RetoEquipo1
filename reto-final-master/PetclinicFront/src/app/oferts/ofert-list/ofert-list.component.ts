import {Component, OnInit} from '@angular/core';
import {OfertService} from '../oferts.service';
import {Ofert} from '../ofert';
import 'rxjs/Rx';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ofert-list',
  templateUrl: './ofert-list.component.html',
  styleUrls: ['./ofert-list.component.css']
})
export class OfertListComponent implements OnInit {
  errorMessage: string;
  oferts: Ofert[];

  constructor(private router: Router, private ofertService: OfertService) {
  }

  ngOnInit() {
    this.ofertService.getOferts().subscribe(
      oferts => this.oferts = oferts,
      error => this.errorMessage = <any> error);
  }

  onSelect(ofert: Ofert) {
    this.router.navigate(['/oferts', ofert.id]);
  }

  addOfert() {
    this.router.navigate(['/oferts/add']);
  }

}

