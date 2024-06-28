import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
 

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MenubarModule,
    ButtonModule,
    InputTextModule,
    CardModule,
    RatingModule

  ]
})
export class SharedModule { }
