import { Injectable } from '@angular/core';
import { Student } from './student.model';
import{HttpClient}from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

 constructor(private http:HttpClient){}

  formData:Student = new Student();

  readonly baseURL = 'https://localhost:44330/api/student'
  list:Student[];

  refreshList() {

    return this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.list = res as Student[]);
  }

  postStudent(){
    return this.http.post(this.baseURL,this.formData);
  }

  updateStudent(){
    return this.http.put(`${this.baseURL}?id=${this.formData.id}`,this.formData);
  }

  DeleteStudent(id:number){
    return this.http.delete(`${this.baseURL}/${id}`);
  }

}

