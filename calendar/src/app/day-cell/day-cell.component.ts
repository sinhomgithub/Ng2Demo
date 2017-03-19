import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-cell',
  templateUrl: './day-cell.component.html',
  styleUrls: ['./day-cell.component.css']
})
export class DayCellComponent implements OnInit {

  constructor() { }

  @Input()
  activeDate: Date;

  @Input()
  currentMonth: Date;

  @Input()
  currentDate: Date;



  isHoliday: boolean;
  isMonthDay: boolean;
  isActiveDay: boolean;

  ngOnInit() {

    // 是否為六日
    this.isHoliday = false;
    if (this.currentDate.getDay() == 6 || this.currentDate.getDay() == 0) {
      this.isHoliday = true;
    }

    // 是否與 CurrentMonth 為同一月份
    this.isMonthDay = false;
    if (this.currentMonth.getMonth() == this.currentDate.getMonth()) {
      this.isMonthDay = true;
    }

    // 是否為點擊的日子
    this.isActiveDay = false;
    if (this.currentDate.getFullYear() == this.activeDate.getFullYear() &&
      this.currentDate.getMonth() == this.activeDate.getMonth() &&
      this.currentDate.getDate() == this.activeDate.getDate())
      this.isActiveDay = true;
  }

}
