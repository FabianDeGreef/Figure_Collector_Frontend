import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'measure'
})
export class MeasurePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value + " cm";
  }

}
