import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-my-news',
  templateUrl: './my-news.component.html',
  styleUrls: ['./my-news.component.css'],
})
export class MyNewsComponent implements OnInit {
  constructor(private _DataService: DataService) {}

  ngOnInit(): void {
    this.getNewsApi();
  }
  formAddNews: FormGroup = new FormGroup({
    addressHeadline: new FormControl(null, Validators.required),
    ExplanationOfTheNews: new FormControl(null, Validators.required),
    newsType: new FormControl(null, Validators.required),
  });
  //  send news for api
  img: any;
  choosePhoto(event: any) {
    this.img = event.target.files[0];
  }
  errSendNews: string = '';
  sendNews() {
    let newsType = (<HTMLSelectElement>document.getElementById('newsType'))
      .value;
    let addressHeadline = (<HTMLInputElement>(
      document.getElementById('addressHeadline')
    )).value;
    let ExplanationOfTheNews = (<HTMLInputElement>(
      document.getElementById('ExplanationOfTheNews')
    )).value;
    let fileMe = new FormData();
    fileMe.append('addressHeadline', addressHeadline);
    fileMe.append('newsType', newsType);
    fileMe.append('ExplanationOfTheNews', ExplanationOfTheNews);
    fileMe.append('Image', this.img);
    this._DataService.addNewsForUser(fileMe).subscribe((res) => {
      if (res.message == 'success') {
        this.getNewsApi();
        console.log(res);

        (<HTMLInputElement>document.getElementById('addressHeadline')).value =
          '';
        (<HTMLInputElement>(
          document.getElementById('ExplanationOfTheNews')
        )).value = '';
      } else {
        this.errSendNews = res.message;
      }
    });
  }

  // get news from api
  baseUrlUser: string = 'http://localhost:3000/profile/';
  dataNews: any[] = [];
  errDataNews: string = '';
  getNewsApi() {
    this._DataService.getNewsForUser().subscribe((res) => {
      console.log(res);
      if (res.message == 'success') {
        this.dataNews = res.news;
      } else {
        this.errDataNews = res.message;
      }
    });
  }
  // delete
  deleteNews(id: string) {
    let data = { _id: id };

    this._DataService.deleteNewsForUser(data).subscribe((res) => {
      console.log(res);

      if (res.message == 'success') {
        this.getNewsApi();
        this.dataNews = [];
      }
    });
  }

  dataOneNews: any[] = [];
  getNewsOne(id: string) {
    console.log(id);

    let data = { _id: id };
    this._DataService.getNewsSpicilyUser(data).subscribe((res) => {
      console.log(res);

      this.dataOneNews.push(res.news);
    });
  }

  remove() {
    this.dataOneNews = [];
  }
}
