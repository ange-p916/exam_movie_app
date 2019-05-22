import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { Config } from 'protractor';
import { Observable, config } from 'rxjs';
import { HttpResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { MovieService } from '../movie.service';
import { Movie } from '../entities/movie';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  config: Config;

  constructor(private configService: ConfigService,private http: HttpClient) { }

  ngOnInit() {
  }

  showConfig() {
    this.configService.getConfig()
      .subscribe((data: Config) => this.config = {
          ... data
      });
  }

  showResp()
  {
    this.http.get('localhost:3000/movies')
    .subscribe(res => {
        console.log(res);
        let body: string = JSON.parse(res['_body']);
  });
  }

}
