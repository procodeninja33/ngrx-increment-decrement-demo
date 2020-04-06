import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppComponent } from './app.component';
 
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './ngrx/counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { AppRoutingModule } from './app-routing.module';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [AppComponent, MyCounterComponent, TestComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ counter: counterReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
