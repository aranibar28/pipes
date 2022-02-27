import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado',
})
export class CapitalizadoPipe implements PipeTransform {
  transform(value: string, every: boolean = true): string {
    value = value.toLocaleLowerCase();
    let names = value.split(' ');
    if (every) {
      names = names.map((name) => {
        return name[0].toUpperCase() + name.substring(1);
      });
    } else {
      names[0] = names[0][0].toUpperCase() + names[0].substring(1);
    }
    return names.join(' ');
  }
}
