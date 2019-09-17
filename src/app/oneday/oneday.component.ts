import {Component, Input, OnInit} from '@angular/core';
import {Climas} from '../shared/models/climas';

@Component({
  selector: 'app-oneday',
  templateUrl: './oneday.component.html',
  styleUrls: ['./oneday.component.css']
})
export class OnedayComponent implements OnInit {
  @Input() dados: Climas;

  constructor() { }

  ngOnInit() {

  }

}
