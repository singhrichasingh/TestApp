import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
 url="http://jsonplaceholder.typicode.com/"
  constructor( public http: HttpClient) { }
  getData(){
    let headers = new HttpHeaders().set('Content-Type', 'application/json; charset=UTF-8');
  return this.http.get(this.url+"posts", { headers }).pipe(map((res: any) => {
    console.log(res);
    return (res);
  }
));
  }

  getSepcificPostData(id){
    let headers = new HttpHeaders().set('Content-Type', 'application/json; charset=UTF-8');
  return this.http.get(this.url+"posts/"+id, { headers }).pipe(map((res: any) => {
    console.log(res);
    return (res);
  }
));
  }
  createNewPost(body){
    let headers = new HttpHeaders().set('Content-Type', 'application/json; charset=UTF-8');
  return this.http.post(this.url+"posts",body, { headers }).pipe(map((res: any) => {
    console.log(res);
    return (res);
  }
));
}
deletePost(id){
  let headers = new HttpHeaders().set('Content-Type', 'application/json; charset=UTF-8');
return this.http.delete(this.url+"posts/"+id, { headers }).pipe(map((res: any) => {
  console.log(res);
  return (res);
}
));
}
}
