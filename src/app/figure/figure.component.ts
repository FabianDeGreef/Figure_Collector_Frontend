import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Figure } from '../models/figure';
import { FigureService } from '../services/figure.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-figure',
  templateUrl: './figure.component.html',
  styleUrls: ['./figure.component.css']
})
export class FigureComponent implements OnInit {

  @Input() figure:Figure;
  @Output() deleteFigure: EventEmitter<any> = new EventEmitter();

  constructor(private figureService: FigureService, private router:Router){}

  remove(){
    this.figureService.removeFigure(this.figure).subscribe(data=>{
      console.log(data);
      this.deleteFigure.emit();
    });
  }
  edit(){
    console.log(this.figure._id);
   //  this.router.navigate(['/editFigure',this.figure._id])
  }
  ngOnInit() {

  }
}
