import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlConstants } from '../constaint/urlconstaints'

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getStudent() {
    return this.http.get(UrlConstants.BaseUrl + UrlConstants.Student.Get.Student);

  }

  addStudent(studentobj) {
    return this.http.post(UrlConstants.BaseUrl + UrlConstants.Student.Get.Student, studentobj);
  }

  editStudent(studentobj){
    return this.http.put(UrlConstants.BaseUrl + UrlConstants.Student.Get.Student+'/'+studentobj.id, studentobj);  
  }
}
