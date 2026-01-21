import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  welcomeMessage: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<string>('http://localhost:8080/api/home')
      .subscribe(
        data => this.welcomeMessage = data,
        error => this.welcomeMessage = 'Welcome to Inazuma Eleven Victory Road Dex!'
      );
  }
}
