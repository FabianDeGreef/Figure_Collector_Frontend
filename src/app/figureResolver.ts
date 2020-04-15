import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Figure } from './models/figure';
import { FigureService } from './services/figure.service';

@Injectable({ providedIn: 'root' })
export class FigureResolver implements Resolve<Figure> {
  constructor(private figureService: FigureService) {}

  figure:Figure;
  resolve(route: ActivatedRouteSnapshot) {
    //  this.figureService.getFigureById(route.paramMap.get('index')).subscribe(data => {
    //      this.figure = data;
    //  });
    //  //console.log(this.figure);
    //  return this.figure;

    return this.figureService.getFigureById(route.paramMap.get('index'))
    //console.log(this.figure);
  }
}