import { Component, OnInit } from '@angular/core';
import { AddCaseService } from './addcase.service';

@Component({
  moduleId: module.id,
  templateUrl: './addcase.component.html',
  styleUrls: ['./addcase.component.scss']
})
export class AddCaseComponent implements OnInit {
  json: any;
  jsonStr: any;
  jsons: Array<any> = [];
  constructor(private addCaseService: AddCaseService) {

  }

  ngOnInit() {
    this.jsonStr = '{"name":"testcase","testcase":[{"num":1,"testCaseName":"老用户登陆友邻市集","apiName":"登陆友邻市集","state":"无效","creator":"郑婷婷","updator":"曾晨","updateTime":""},{"num":2.0,"testCaseName":"团购商品详情页获取","apiName":"商家列表接口","state":"有效","creator":"李四","updator":"曾晨","updateTime":""},{"num":3,"testCaseName":"普通商品详情页获取","apiName":"友邻商品详情接口","state":"无效","creator":"张三","updator":"曾晨","updateTime":""}],"place":{"1":"深圳","2":"广州"}}';
    this.json = {
      'name': 'testcase',
      'testcase': [
        {
          'num': 1,
          'testCaseName': '老用户登陆友邻市集',
          'apiName': '登陆友邻市集',
          'state': '无效',
          'creator': '郑婷婷',
          'updator': '曾晨',
          'updateTime': ''
        }, {
          'num': 2,
          'testCaseName': '团购商品详情页获取',
          'apiName': '商家列表接口',
          'state': '有效',
          'creator': '李四',
          'updator': '曾晨',
          'updateTime': ''
        }, {
          'num': 3,
          'testCaseName': '普通商品详情页获取',
          'apiName': '友邻商品详情接口',
          'state': '无效',
          'creator': '张三',
          'updator': '曾晨',
          'updateTime': ''
        }
      ]
    };

    this.getParam();
  }

  // 获取json格式数据key/value值
  getJsonData(json: any) {
    if (Array.isArray(json)) {
      for (const object of json) {
        this.getObjParam(object);
      }
    } else {
      this.getObjParam(json);
    }
  }

  // 获取对象格式数据key/value值
  getObjParam(object) {
    for (const key of Object.keys(object)) {
      const obj: any = {};
      obj['name'] = key;
      obj['type'] = this.getValueType(object[key]);
      const str: string = JSON.stringify(object[key]);
      if ((str.slice(0, 1) === '{' && str.slice(str.length - 1, str.length) === '}') || (Array.isArray(object[key]))) {
        obj['value'] = '';
        this.jsons.push(obj);
        this.getJsonData(object[key]);
      } else {
        obj['value'] = object[key];
        this.jsons.push(obj);
      }
    }
  }

  // 获取参数值类型
  getValueType(value: any): string {
    let type = '';
    if (value === null || value === undefined) {
      type = value;
    } else if (typeof (value) === 'string') {
      type = 'String';
    } else if (typeof (value) === 'number') {
      type = (value | 0) === value ? 'Int' : 'Float';
    } else if (typeof (value) === 'boolean') {
      type = 'Boolean';
    } else if (Array.isArray(value)) {
      type = 'Array';
    } else {
      type = 'Object';
    }
    return type;
  }

  // 获取参数值
  getParam() {
    this.jsons = [];
    let json = this.jsonStr && this.jsonStr.replace(/\n/ig, '').replace(/ /ig, '');
    if (this.addCaseService.isJSON(json)) {
      console.log(json);
      json = JSON.parse(json);
      this.getJsonData(json);
    } else {
      alert('不是json格式');
    }
  }

}
