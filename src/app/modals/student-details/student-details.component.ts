import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { StudentService } from '../../services/student.service';
import {Student} from '../../model/student.model'
// import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms'

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  @Input() studentdata;
  @Input() dflag;
  studentdetails =new Student;
  disableflag = false;
  disableAddflag = false;
  disablEditeflag = false;
  // mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";  
  constructor(public activeModal: NgbActiveModal, private student: StudentService) { 
  }

  ngOnInit(): void {
    debugger;
    if (this.dflag == 'details') {
      debugger;
      this.disableflag = true;
      this.studentdetails=this.studentdata;
    }
    else if (this.dflag == 'Added') {
      debugger;
      this.disableAddflag = true;
    }
    else if (this.dflag == 'Updated') {
      debugger;
      this.disableflag = false;
      this.disablEditeflag = true;
      this.studentdetails=this.studentdata;

    }
  }

  saveStudentData() {
    if (this.dflag == 'Added') {
     debugger;
     console.log(this.studentdetails);
     this.student.addStudent(this.studentdetails).subscribe(response => {
      debugger;
      console.log(response);
      this.activeModal.close(response);
    });
    }
    else if (this.dflag == 'Updated') {
      debugger;
      console.log(this.studentdetails);
      this.student.editStudent(this.studentdetails).subscribe(response => {
        debugger;
        console.log(response);
        this.activeModal.close(response);
      });
  
    }
    
  }

}
