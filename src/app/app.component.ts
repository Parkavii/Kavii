import { Component,OnInit,OnDestroy,DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
  destroy$: any;
 
  constructor(private router:Router){

  }
 
 
  title = 'this page';

  ngOnInit()
  { 
    console.log("hello");
  }
 
  LClick()
  {
    this.router.navigate(['login']);
  }
  DClick()
  {
    this.router.navigate(['dash']);
  }
  RClick()
  {
    this.router.navigate(['reg']);
  }
  HClick()
  {
    this.router.navigate(['home']);
  }
  OClick()
  {
    this.router.navigate(['obser']);
  }


  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  

  }
}
