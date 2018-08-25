import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jaskaran\'s App';
  public parentData= "Data from parent to child";
  public message = "";

  childEvent(event) {
    console.log(event);
  }
}
