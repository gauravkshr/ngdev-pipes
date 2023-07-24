import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text = '';
  name: string | null = null;
  salary: number | null = null;
  height: number | null = null;
  joinDate: Date | null = null;

  getFloorNumber(value: number): number {
    return Math.floor(value);
  }
}
