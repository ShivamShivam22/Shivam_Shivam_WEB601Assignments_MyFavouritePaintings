import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterByTypePipe implements PipeTransform {
  transform(content: Content[], type: string): Content[] {
    if (!type) {
      return content.filter(item => !item.type);
    }
    return content.filter(item => item.type === type);
  }
}

