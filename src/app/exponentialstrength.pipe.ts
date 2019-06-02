import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponentialstrength',
  pure: true
})
export class ExponentialstrengthPipe implements PipeTransform {

  transform(value: number, exponent?: number): number {
    return Math.pow(value, isNaN(exponent) ? 1 : exponent);
  }

}
