import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrderComponent } from '../order/order.component';

export class Product {
  label: string;
  icon?: string;
  price?: number;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  drinks: Product[] = [
    { label: '生ビール(中)', icon: 'local_drink', price: 298 },
    { label: 'ハイボール', icon: 'local_drink' },
    { label: 'レモンサワー', icon: 'local_drink' },
    { label: 'カシスオレンジ', icon: 'local_drink' },
    { label: '烏龍茶', icon: 'local_drink' },
  ];

  speeds: Product[] = [
    { label: '枝豆', icon: 'restaurant' },
    { label: 'たこわさ', icon: 'restaurant' },
    { label: 'チャンジャ', icon: 'restaurant' },
    { label: '唐揚げ', icon: 'restaurant' },
    { label: 'キムチ', icon: 'restaurant' },
  ];

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  openOrderDialog(): void {
    const dialogRef = this.dialog.open(OrderComponent, {
      width: '80%',
      data: { product: Product }
    })
  }

}