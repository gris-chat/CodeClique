import { Component } from '@angular/core';
import { NavigationComponent } from '@features/navigation/navigation.component';
import { ToastComponent } from './shared/components/toast/toast.component';

@Component({
  selector: 'app-root',
  imports: [NavigationComponent, ToastComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
