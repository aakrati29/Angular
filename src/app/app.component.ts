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
  message: string = 'Hello from BridgeLabz using One Way Data Bindings';
  bridgeLabzUrl:string="https://www.bridgelabz.com/";
  userName: string = '';
  errorMessage:string='';

  openBridgeLabz(): void {
    window.open(this.bridgeLabzUrl, '_blank');
  }
  validateInput(){
    const regex = RegExp('^[A-Z]{1}[a-z//s]{2,}$');
    if(!regex.test(this.userName)){
      this.errorMessage="Invalid name";
      return;
    }
    this.errorMessage='';
  }
}