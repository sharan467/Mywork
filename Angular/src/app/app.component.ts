import { Component } from '@angular/core';
import { ReadjsonService } from './readjson.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  response: Array<any>;
  constructor(private service: ReadjsonService) {

  }
  ngOnInit(): void {

  }

  loadData(): void {
    this.service.getData().subscribe(
      data => {
        this.response = data;
        console.log(data.length, ' records fetched!');
      }
    );
  }
}
