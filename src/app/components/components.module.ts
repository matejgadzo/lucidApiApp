import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataViewComponent } from './data-view/data-view.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    DataViewComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DataViewComponent,
    HeaderComponent
  ]
})
export class ComponentsModule { }
