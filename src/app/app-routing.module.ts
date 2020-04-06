import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  {
    path: '',
    component: MyCounterComponent
  },
  {
    path: 'test',
    component: TestComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
