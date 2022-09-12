import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  private subscription!: Subscription;

  // build on component init
  ngOnInit(): void {
   const myObservable: Observable<any> = new Observable((observer: Observer<any>)=> {
    const data = 2;
    observer.next(data);
    observer.next(3);
    observer.next(4);
    //setTimeout(() => observer.next(5), 3000);
    //observer.error("oooh no");
    //observer.complete();

  }); 

  // Sort three possible actions 
  myObservable.subscribe({
    next: a => console.log('[next] :',a),
    complete: () => console.log('[completed]'),
    error: a => console.log('[error] : ', a)
  });

  // Default : next 
  myObservable.subscribe((x) => {
    console.log(x);
  })
  }


  // turn off connection
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
