import {Component, OnInit} from '@angular/core';
import {OfertService} from '../oferts.service';
import {Router, ActivatedRoute} from '@angular/router';
import {Ofert} from '../ofert';
import 'rxjs/Rx';
import {Pet} from '../../pets/pet';
import {Visit} from '../../visits/visit';


@Component({
  selector: 'app-ofert-detail',
  templateUrl: './ofert-detail.component.html',
  styleUrls: ['./ofert-detail.component.css']
})
export class OfertDetailComponent implements OnInit {
  errorMessage: string;
  ofert: Ofert;

  constructor(private route: ActivatedRoute, private router: Router, private ofertService: OfertService) {
    this.ofert = <Ofert>{};
  }

  ngOnInit() {
    const ofertId = this.route.snapshot.params['id'];
    this.ofertService.getOfertById(ofertId).subscribe(
      ofert => this.ofert = ofert,
      error => this.errorMessage = <any> error);
  }

  gotoOfertsList() {
    this.router.navigate(['/oferts']);
  }

  editOfert() {
    this.router.navigate(['/oferts', this.ofert.id, 'edit']);
  }

  addPet(ofert: Ofert) {
    this.router.navigate(['/oferts', ofert.id, 'pets', 'add']);
  }


}
