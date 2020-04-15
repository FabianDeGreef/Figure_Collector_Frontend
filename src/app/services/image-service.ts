import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http:HttpClient) {}
  
  onUpload(file:File,name:string){
    const formData = new FormData();
    formData.append('image',file,name+'.'+ file.name.split('.').pop());
    this.http.post('http://localhost:3000/api/upload',formData).subscribe(res=> {
      console.log(res);
    });
  }
}
