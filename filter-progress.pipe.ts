import { Pipe, PipeTransform } from '@angular/core';
import {Item} from './item';
@Pipe({
  name: 'filterProgress',
  pure: false
})
export class FilterProgressPipe implements PipeTransform {

  transform(ii: Item[]) {
    return ii.filter(items => items.progress === '');
  }



}
