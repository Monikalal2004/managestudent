import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,StudentdetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'managestudent';
}
