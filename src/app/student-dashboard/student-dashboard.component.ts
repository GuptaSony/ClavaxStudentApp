import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StudentService } from '../services/student.service';
import { StudentDetailsComponent } from '../modals/student-details/student-details.component';
import { ToastService } from '../services/toast';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  students;
  page = 1;
  pageSize = 4;
  collectionSize;
  // countries: Country[];


  constructor(private studentservice: StudentService, private modalService: NgbModal, public toastService: ToastService) {
  }

  ngOnInit(): void {
    this.getStudent();
    // this.refreshCountries();
  }

  getStudent() {
    this.studentservice.getStudent().subscribe(data => {
      debugger;
      this.students = data
      this.collectionSize = this.students.length;
    });
  }

  getStudentDetails(event, studentDetails, formtype) {
    event.stopPropagation();

    const modalRef = this.modalService.open(StudentDetailsComponent, { backdropClass: 'light-blue-backdrop', size: 'lg', backdrop: 'static' });
    debugger;
    console.log(studentDetails)
    modalRef.componentInstance.studentdata = studentDetails;
    modalRef.componentInstance.dflag = formtype;
    modalRef.result.then(result => {
      debugger;
      console.log(result);
      this.showSuccess('Student '+ formtype +' Successfully',result.student_name);
      this.getStudent();
    });
  }

  showStandard() {
    this.toastService.show('I am a standard toast');
  }

  showSuccess(msg,data) {
    this.toastService.show(data +' ' + msg, { classname: 'bg-success text-light', delay: 10000 });
  }

  showDanger(dangerTpl) {
    this.toastService.show(dangerTpl, { classname: 'bg-danger text-light', delay: 15000 });
  }

  refreshCountries() {
    this.students = this.students
      .map((student, i) => ({ id: i + 1, ...student }))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}
