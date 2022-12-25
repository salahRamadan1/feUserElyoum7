import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-user-news',
  templateUrl: './user-news.component.html',
  styleUrls: ['./user-news.component.css'],
})
export class UserNewsComponent implements OnInit {
  constructor(private _DataService: DataService) {}

  ngOnInit(): void {
    this.getData();
  }

  dataTrue: any[] = [];
  errTrue: string = '';

  getData() {
    this._DataService
      .getUserNewsForAdmin({ ConfirmTheNews: true })
      .subscribe((res) => {
        console.log(res);

        if (res.message == 'success') {
          this.dataTrue = res.news;
        } else {
          this.errTrue = res.message;
        }
      });
  }
}
