import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClientSearchComponent } from './client-search/client-search.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { EsbSearchMainComponent } from './../shared/components/esb-search-main/esb-search-main.component';



@NgModule({
  declarations: [ClientSearchComponent,EsbSearchMainComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'search', pathMatch: 'full' },
      { path: 'search', component: ClientSearchComponent}
    ])
  ]
})
export class ClientModule { }
