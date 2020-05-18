import { Component, AfterViewInit, OnInit } from '@angular/core';
import { PreloaderService } from './shared/preloader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  constructor(private preloader: PreloaderService) {}
  title = 'ERP-Student';
  ngOnInit() {}

  ngAfterViewInit() {
    this.preloader.hide();
  }
}
