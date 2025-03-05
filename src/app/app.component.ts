import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First Angular Project';
  logoUrl: string = 'images.jpeg';
  message: string = 'Hello from BridgeLabz';
  bridgeLabzUrl:string="https://www.bridgelabz.com/";
  userName: string = '';

  openBridgeLabz(): void {
    window.open(this.bridgeLabzUrl, '_blank');
  }
}
