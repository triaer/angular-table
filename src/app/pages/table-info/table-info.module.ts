import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TableInfoPageRoutingModule } from './table-info-routing.module';
import { TableFormComponent } from '../../components/table-form/table-form.component'
import { TableInfoPage } from './table-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TableInfoPageRoutingModule
  ],
  declarations: [TableInfoPage, TableFormComponent]
})
export class TableInfoPageModule {}
