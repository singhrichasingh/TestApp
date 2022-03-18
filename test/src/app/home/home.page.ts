import { Component } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { AddNewPostComponent } from '../pages/add-new-post/add-new-post.component';
import { PostDetailsComponent } from '../pages/post-details/post-details.component';
import { AuthServiceService } from '../service/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data: any;
  specificData: any;

  constructor(private auth:AuthServiceService,private modalCtrl: ModalController) {
    this.getData()
  }

  getData(){
    this.auth.getData().subscribe(res=>{
      this.data=res;
      console.log(res)
    })
  }

  async getSpecificPost(id){
    this.auth.getSepcificPostData(id).subscribe(async res=>{
      this.specificData=res;
      const modal = await this.modalCtrl.create({
        component: PostDetailsComponent,
        componentProps: {
          data:  this.specificData
        }
      });
      return await modal.present();
    })
   
  }

 async addNewPost(){
  const modal = await this.modalCtrl.create({
    component: AddNewPostComponent,
  });
  return await modal.present();
  }
}
