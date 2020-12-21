import { Component } from '@angular/core';
import { SearchOptionsService } from 'src/app/core/services/searchOptions.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  constructor( public searchOptionsService: SearchOptionsService ) {}
}
