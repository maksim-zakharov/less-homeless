import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-shop-widget',
  templateUrl: './shop-widget.component.html',
  styleUrls: ['./shop-widget.component.scss']
})
export class ShopWidgetComponent implements OnInit {

  @Input() text: string;
  @Input() sum: number;
  @Input() successURL: string;
  @Input() account: string;

  url: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://yoomoney.ru/quickpay/shop-widget?writer=seller&lang=ru&targets=${this.text}&targets-hint=&default-sum=${this.sum}&button-text=11&payment-type-choice=on&mobile-payment-type-choice=on&fio=on&phone=on&mail=on&hint=&successURL=${this.successURL}&quickpay=shop&account=${this.account}`
    );
  }
}
