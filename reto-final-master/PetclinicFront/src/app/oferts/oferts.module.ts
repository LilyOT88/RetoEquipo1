import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfertListComponent } from './ofert-list/ofert-list.component';
import { OfertAddComponent } from './ofert-add/ofert-add.component';
import { OfertDetailComponent } from './ofert-detail/ofert-detail.component';
import { OfertEditComponent } from './ofert-edit/ofert-edit.component';
import { OfertService } from './oferts.service';
import { OfertsRoutingModule } from './oferts-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OfertsRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [OfertListComponent, OfertAddComponent, OfertDetailComponent, OfertEditComponent],
  providers : [OfertService]
})
export class OfertsModule { }
