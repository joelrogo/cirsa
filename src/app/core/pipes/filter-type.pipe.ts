import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterByTypeId' })
export class FilterTypePipe implements PipeTransform {
  transform(items: any[], searchNumber: number): any[] {
    if (!items) {
      return [];
    }
    if (!searchNumber) {
      return items;
    }

    return items.filter(it => {
      return it.type.id === searchNumber;
    });
  }
}