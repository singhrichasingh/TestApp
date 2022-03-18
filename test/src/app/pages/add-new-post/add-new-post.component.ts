import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AuthServiceService } from 'src/app/service/auth-service.service';
@Component({
  selector: 'app-add-new-post',
  templateUrl: './add-new-post.component.html',
  styleUrls: ['./add-new-post.component.scss'],
})
export class AddNewPostComponent implements OnInit {

  constructor( private formBuilder: FormBuilder,private auth:AuthServiceService,private modalCtrl: ModalController, private router: Router) { }

  ngOnInit() {}

  addNewPost(){
   let body= JSON.stringify({
      title: this.postForm.value.title,
      body: this.postForm.value.body,
      userId: this.postForm.value.userId,
    })
    this.auth.createNewPost(body).subscribe(res=>{
      alert("Post created successfully")
      this.modalCtrl.dismiss();
      this.router.navigate(['/home'])
    })
  }

  dismiss(){
    this.modalCtrl.dismiss();
    this.router.navigate(['/home'])
  }

  get userId() {
    return this.postForm.get('userId');
  }
  get body() {
    return this.postForm.get('body');
  }
  get title() {
    return this.postForm.get('title');
  }
  postForm = this.formBuilder.group({
    userId: ['', [Validators.required,
    ]
    ],
    title: ['',
      [
        Validators.required]], 
    body: [
      '',
      [
        Validators.required
      ]
    ]})
}
