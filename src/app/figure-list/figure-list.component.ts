import { Component, OnInit } from '@angular/core';
import { Figure } from '../models/figure';
import { FigureService } from '../services/figure.service';

@Component({
  selector: 'app-alien-list',
  templateUrl: './figure-list.component.html',
  styleUrls: ['./figure-list.component.css']
})
export class FigureListComponent implements OnInit {

  figures:Figure[];

  constructor(private figureService:FigureService){}

  onDelete(){
    this.fetchList();
  }
  fetchList(){
    this.figureService.getFigures().subscribe(data => {
      this.figures = data;
      console.log(this.figures);
    });
  }

  ngOnInit() {
    this.fetchList();
  }
}

