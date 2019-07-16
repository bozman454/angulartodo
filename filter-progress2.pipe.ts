import { Pipe, PipeTransform } from '@angular/core';
import {Item} from './item';
@Pipe({
  name: 'filterProgress2',
  pure: false
})
export class FilterProgress2Pipe implements PipeTransform {

  transform(ii: Item[]) {
   
    return ii.filter(items => items.progress === 'not done');
  }

}
