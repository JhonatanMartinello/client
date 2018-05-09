import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ProdutoComponent} from './produto.component';
import {ProdutoService} from './produto.service';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';
import {CheckboxModule, Dropdown, DropdownModule, RadioButtonModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule,
    DropdownModule
  ],
  declarations: [
    ProdutoComponent
  ],
  providers: [
    ProdutoService
  ]
})
export class ProdutoModule {

}
