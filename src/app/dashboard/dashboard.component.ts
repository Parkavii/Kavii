import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  displayedColumns: string[] = ['position', 'value'];
  values: string[] = [];
  newValue: string = '';

  constructor(private dataService: DataService) {
    this.values = dataService.getValues();
  }
 
}
