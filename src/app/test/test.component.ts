import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  count: Observable<number>;

  constructor(private store: Store<{ counter: number }>) {
    this.count = store.pipe(select('counter'));
  }

  ngOnInit() {
  }

}
