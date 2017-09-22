import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bind',
  templateUrl: './data-bind.component.html',
  styleUrls: ['./data-bind.component.css']
})
export class DataBindComponent implements OnInit {
  /*数据绑定的四种形式*/
  dataBind1 = 'sssss';
  imgUrl = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505' +
    '207941&di=e8fbf234518fe5797f288784f461aaae&imgtype=jpg&er=1&src=http%3A%2F%2Fim' +
    'g4.duitang.com%2Fuploads%2Fblog%2F201410%2F14%2F20141014104112_sLeea.thumb.700_0.jpeg';
  inputName = 'Tom';
  constructor() { }
  handleClick() {
    alert('oh,you pressed the button');
  }
  ngOnInit() {
  }

}
