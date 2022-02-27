import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  name: string = 'Capitán América';
  myname: string = 'gErSoN aRaNiBaR';
  array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  PI: number = Math.PI;
  percentage: number = 0.234;
  payment: number = 1234.5;
  dating: Date = new Date();
  activate: boolean = true;
  language: string = 'en';
  videoUrl: string = 'https://www.youtube.com/embed/M0RGF66groA';

  valuePromise = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Llego la data');
    }, 5000);
  });

  hero = {
    name: 'Logan',
    key: 'Wolverine',
    age: 500,
    direction: {
      street: 'First',
      house: 20,
    },
  };
}
