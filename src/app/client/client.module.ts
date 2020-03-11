import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClientSearchComponent } from './client-search/client-search.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';



@NgModule({
  declarations: [ClientSearchComponent],
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
