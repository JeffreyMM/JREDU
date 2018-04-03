import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  id;
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    // this.id = this.router.snapshot.queryParams['id'];
    this.id = this.router.snapshot.params['id'];
  }
}
