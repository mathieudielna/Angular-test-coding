import { Component, OnInit } from '@angular/core';
//import { Subject } from 'rxjs';
import { BehaviorSubject, filter, map, Subject } from 'rxjs';


interface User {
  firstName: String;
  lastName: String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  user: BehaviorSubject<any> = new BehaviorSubject(null);
  
  // init of app 
  ngOnInit(): void {
    // place for http call
    this.user.next({
      firstName: 'Jean',
      lastName: 'Patrick'
    })

    // return base object
    const u1 = this.user.subscribe((user : User) => console.log(user));

    // return piped object
    const u2 = this.user.pipe(
      map((user)=> {
        return `${user.firstName} ${user.lastName}`
      })
    ).subscribe((fullname : String) => console.log(fullname));

    // filter 
    const u3 = this.user.pipe(
      filter((user: User) => true),
      map((user)=> {
        return `${user.lastName} ${user.firstName}`
      })
    ).subscribe((fullname : String) => console.log(fullname));


    // transmit data - possibility to set a type <any>
    const subject = new BehaviorSubject(0);
    const s1 = subject.subscribe((x) => {
      console.log('[ s1 ]  : ', x);
    })
    // only S1
    //subject.next(1);
    const s2 = subject.subscribe((x) => {
      console.log('[ s2 ]  : ', x);
    })
    subject.next(1);
    s1.unsubscribe();
    // only s2 because s1 has unsuscribe
    subject.next(2);

  }
}
