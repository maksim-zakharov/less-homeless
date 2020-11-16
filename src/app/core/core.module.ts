import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ShopWidgetComponent } from './shop-widget/shop-widget.component';



@NgModule({
  declarations: [FooterComponent, HeaderComponent, ShopWidgetComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [FooterComponent, HeaderComponent, ShopWidgetComponent]
})
export class CoreModule { }
