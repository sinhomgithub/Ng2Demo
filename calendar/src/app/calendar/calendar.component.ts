import { DayCellComponent } from './../day-cell/day-cell.component';
import { DateFormatter } from '@angular/common/src/pipes/intl';
import { DatePipe } from '@angular/common/src/pipes/date_pipe';
import { Component, ContentChildren, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor() { }

  activeDate: Date;  // 點擊的日期
  currentDate: Date;  // 顯示的日期
  currentDateString: String;

  columnNames = [];
  rowNumbers = [];
  cells = [];

  // 日期格子的 UI 元件
  @ViewChildren('cellList')
  cellList: QueryList<DayCellComponent>;

  ngOnInit() {

    this.activeDate = new Date();
    this.currentDate = new Date();

    this.renderCalenar(this.currentDate);
  }

  ngAfterViewInit() {
    console.log(this.cellList);
  }

  specialDayRender(d: Date) {
    let s: string = "";

    let specialRange: Array<Date> = [new Date("2017/3/7"), new Date("2017/4/18")];
    if (d >= specialRange[0] && d <= specialRange[1]) {
      s = "教育訓練";
    }

    return s;
  }


  leftButton_Click() {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.computeCurrentDateString();

    this.renderCalenar(this.currentDate);
  }

  rightButton_Click() {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.computeCurrentDateString();

    this.renderCalenar(this.currentDate);
  }

  @ViewChild('mainCalendar')
  mainCalendar: ElementRef;

  todayButton_Click() {
    this.currentDate = new Date();

    this.computeCurrentDateString();
    this.renderCalenar(this.currentDate);

  }

  renderCalenar(viewDate: Date) {

    // Date
    // 星期 getDay() : 0,1,2,3,4,5,6 => 日,一,二,三,四,五,六
    // 年份 getFullYear() : 2017 => 2017
    // 月份 getMonth() : 0,1,2,3,4,5,6,7,8,9,10,11 => 一月, 二月, 三月...十二月
    // 日期 getDate() : 1,2,3....31 => 1,2,3...31

    this.columnNames = ['日', '一', '二', '三', '四', '五', '六'];

    // 計算開始計算日期 (1 號之前, 或是 1 號)
    let d1 = new Date(this.currentDate.getFullYear(), viewDate.getMonth(), 1);  // Y/M/1
    let d0 = new Date(d1);
    d0.setDate(0 - d0.getDay() + 1);   // Ex: 2017/3/1 (三) => 開始日 2017/3/1 - 三 => 2017/2/26

    // 計算當月結束日
    var d2 = new Date(viewDate);
    d2.setMonth(d2.getMonth() + 1);
    d2.setDate(1);
    d2.setDate(d2.getDate() - 1);

    this.rowNumbers = [];
    this.cells = [];

    let di: Date = d0;

    // 產生 開始到結束的 7 X N 的 Cell
    let endWeek = false;
    let index = 0;
    do {
      this.rowNumbers.push(index);
      for (let i = 0; i < 7; i++) {
        this.cells.push(new Date(di));
        di.setDate(di.getDate() + 1);   // day ++

        if (di.getTime() > d2.getTime())
          endWeek = true;
      }
      index++;
    } while (endWeek == false);

    this.computeCurrentDateString();

  }

  computeCurrentDateString() {
    var datePipe = new DatePipe("en-US");
    this.currentDateString = datePipe.transform(this.currentDate, 'yyyy/MM/dd');
  }



}
