import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.router.navigate(['/quiz']);
    localStorage.clear();
    localStorage.setItem('correctAsnwers', "0");
  }
}
