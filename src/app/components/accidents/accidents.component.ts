import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-accidents',
  templateUrl: './accidents.component.html',
  styleUrls: ['./accidents.component.css'],
})
export class AccidentsComponent implements OnInit {
  constructor(private _DataService: DataService) {}
  ngOnInit(): void {
    this.get();
  }
  dataNews: any[] = [];

  get() {
    let data = { newsType: 'حوادث' };
    this._DataService.getNewsNewsType(data).subscribe((res) => {
      if (res.message == 'success') {
        this.dataNews = res.news;
      }
    });
  }

  dataOneNews: any[] = [];
  getNewsOne(id: string) {
    let data = { _id: id };
    this._DataService.getSpacialNews(data).subscribe((res) => {
      this.dataOneNews.push(res.news);
    });
  }

  remove() {
    this.dataOneNews = [];
  }
}
