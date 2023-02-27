import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addToArray',
  pure: true
})
export class AddToArrayPipe implements PipeTransform {

  transform<T>(value: T[], ...args: T[]): T[] {
    return [...value, ...args];
  }

}
