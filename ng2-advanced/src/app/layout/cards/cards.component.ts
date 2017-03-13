import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {


  }

  GoHome(){
    this.router.navigateByUrl('/dashboard');
  }

  GoChartsFlot(){
    this.router.navigate(['/charts', 'flot']);

  }

  num = 0;
  p1;
  p2;
  q1;
  q2;
  ngOnInit() {

    console.log('p1=' + this.route.snapshot.params['p1']);
   
    //this.num = this.route.snapshot.params['num'];
    this.route.params.subscribe((params: Params) => {
     
        this.num = parseInt(params['num']);
        this.p1 = this.route.snapshot.params['p1'];
        this.p2 = this.route.snapshot.params['p2'];
        if(isNaN(this.num))
         this.num = 0;
    });

    // this.route.queryParams.subscribe((params: Params) => {
    //   this.q1 = params['q1']);
    //   this.q2 = params['q2'];
    // });


  }

  IncrementNumForMatrix() {
    //this.router.navigate(['/cards', this.num+1]);
  }

}
