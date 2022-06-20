import { Component, OnInit,OnDestroy } from '@angular/core';
import { CartsService } from '../service/carts.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  totalItemNumber:number=0;
  public isAuthanticated: boolean = false;
  private authListenerSubs?: Subscription;
  constructor(private cartapi:CartsService,private authServise: AuthService) { }

  ngOnInit(): void {
    this.cartapi.getProductData().subscribe(res=>{
      this.totalItemNumber = res.length;
    });
    this.authListenerSubs = this.authServise
      .getAuthStatusListener()
      .subscribe((isAuthanticated) => {
        this.isAuthanticated = isAuthanticated;
      });
  }
  onlogout() {
    this.authServise.logout();
  }

  ngOnDestroy(): void {
    this.authListenerSubs?.unsubscribe();
  }

}
