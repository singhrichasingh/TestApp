import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
declare var CameraCustom:any;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform) {
    this.initializeApp();
  }
  initializeApp(){
    this.platform.ready().then(() => {
      alert("allllll")
    CameraCustom.init(
      (res:any) => {
        alert("helll0  "+res)
        //alert("1"+JSON.stringify(res))
      }, (err:any) => {
      alert("2,,,,"+JSON.stringify(err))
      });
  })
  }
 

}
