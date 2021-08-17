import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenreRoutingModule } from './genre-routing.module';
import { GenreBadgeComponent } from './components/genre-badge/genre-badge.component';


@NgModule({
  declarations: [
    GenreBadgeComponent
  ],
  imports: [
    CommonModule,
    GenreRoutingModule
  ]
})
export class GenreModule { }
