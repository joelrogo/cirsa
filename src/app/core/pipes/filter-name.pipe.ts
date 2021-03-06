import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterByName' })
export class FilterNamePipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      it
      return it.name.toLocaleLowerCase().includes(searchText);
    });
  }
}