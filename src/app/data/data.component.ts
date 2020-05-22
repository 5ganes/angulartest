import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  title = 'User List';
  
  users;

  constructor(private service: AuthorService) { 

  }

  ngOnInit(): void {
    this.service.getAuthors().subscribe(data => {
      this.users = data.users;
    });
  }

}
