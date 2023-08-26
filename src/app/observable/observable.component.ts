import { Component , OnInit } from '@angular/core';
import { ObseserviceService } from '../obseservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  name : any;

  constructor(private service : ObseserviceService)
  {}
 
  ngOnInit() {
    
    this.name = this.service.getName_Data().subscribe(
      data => {this.name = data.entries}
    );
  }
}