import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { AuthServiceService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit {
  @Input() data;
  //specificData: any;
  constructor(private auth:AuthServiceService,  private alertController: AlertController,private modalCtrl: ModalController, private router: Router) {
    
   }

  ngOnInit() {
  
  }
  deletePost(id){
     this.auth.deletePost(id).subscribe(res=>{
       alert("Post deleted successfully")
       this.modalCtrl.dismiss();
       this.router.navigate(['/home'])
     })
  }
 

dismiss(){
  this.modalCtrl.dismiss();
  this.router.navigate(['/home'])
}
  async presentAlertConfirm(id) {
    const alert = await this.alertController.create({
      header: 'Delete Confirmation',
      message: 'Are you sure you want to delete this post?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => { }
      }, {
        text: 'Delete',
        handler: () => {
          this.deletePost(id)
         
          
        }
      }]
    });

    await alert.present();
  }
}
