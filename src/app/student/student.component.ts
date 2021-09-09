import { Component, OnInit } from '@angular/core';
import { Student } from '../shared/student.model';
import { StudentService } from '../shared/student.service';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-student1',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(public service : StudentService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  onsubmit(form:NgForm){

    if(this.service.formData.id == 0){
      this.insertRecord(form);
    }
    else
    {
      this.updateRecord(form);
    }

  }

  insertRecord(form:NgForm){
    this.service.postStudent().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Submitted Successfully','Student Detail Registration');
      },
      err => {console.log(err);}
    );
  }


  updateRecord(form:NgForm){
    this.service.updateStudent().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Updated Successfully','Student Detail Registration');
      },
      err => {console.log(err);}
    );
  }


  onDelete(id:number){

    this.service. DeleteStudent(id).subscribe(
      res => {
        this.service.refreshList();
        this.toastr.error('Deleted Successfully','Student Detail Registration');
      },
      err => {console.log(err);}
    );
  }


  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new Student();
  }

  populateForm(selectedRecord: Student){
this.service.formData = Object.assign({}, selectedRecord);
  }

}
