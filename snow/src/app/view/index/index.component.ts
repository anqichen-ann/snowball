import { Component, OnInit } from '@angular/core';
import Axios from 'axios';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {

  constructor() {
    this.getData()
   }

  ngOnInit(): void {
  }
  async getData(){
    let httpUrl = 'http://localhost:8080/api/index/stock'
    let result =  await Axios.get(httpUrl);
    console.log(result.data)
  }

}
