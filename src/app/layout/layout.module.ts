import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule, MatSidenavModule, MatListModule } from '@angular/material';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [LayoutComponent, HeaderComponent, MenuComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class LayoutModule { }
