import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css'],
})
export class HomeMainComponent implements OnInit {
  constructor(private _DataService: DataService) {}

  ngOnInit(): void {
    this.get();
  }
  dataSlid: any[] = [];
  headerData: any[] = [];
  allData: any[] = [];
  get() {
    this._DataService.getNews().subscribe((res) => {
      console.log(res);
      if (res.message == 'success') {
        this.dataSlid = res.news.slice(0, 3);
        this.headerData = res.news.slice(0, 1);
        this.allData = res.news.slice(0, 10);
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
