import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First Angular Project';
  logoUrl: string = 'images.jpeg';
  message: string = 'Hello from BridgeLabz';
  bridgeLabzUrl:string="https://www.bridgelabz.com/";

  openBridgeLabz(): void {
    window.open(this.bridgeLabzUrl, '_blank');
  }
}
