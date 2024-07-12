import { Component } from '@angular/core';
import { ChildActivationEnd, ChildActivationStart, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, RouteConfigLoadEnd, RouteConfigLoadStart, Router, RoutesRecognized } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rent-a-car';

  constructor(private spinner: NgxSpinnerService, private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {

        console.log('Display loader');

        spinner.show()
        

      } else if (event instanceof RoutesRecognized) {
        console.log('rotes recognised event', event);
      } else if (event instanceof RouteConfigLoadStart) {
        console.log('RouteConfigLoadStart event', event);
      } else if (event instanceof RouteConfigLoadEnd) {
        console.log('RouteConfigLoadend event', event);
      } else if (event instanceof NavigationEnd) {

        setTimeout(() => {
              this.spinner.hide()
            }, 1000);

      } else if (event instanceof NavigationCancel) {

        setTimeout(() => {
          this.spinner.hide()
        }, 1000);

      } else if (event instanceof NavigationError) {

        setTimeout(() => {
          this.spinner.hide()
        }, 1000);

      } else if (event instanceof ChildActivationStart) {

        console.log('ChildActivationStart');

      } else if (event instanceof ChildActivationEnd) {
        console.log('ChildActivationEnd event', event);
      }

    })
  }






}
