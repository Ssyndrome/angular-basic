import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../../student';
import { StudentService } from '../../services/student.service';
import _ from 'lodash';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  students: Student[];

  i = 0;
  editId: string | null = null;
  checked = false;
  indeterminate = false;
  setOfCheckedId = new Set<number>();

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.students.every(item => this.setOfCheckedId.has(item.id));
    this.indeterminate = this.students.some(item => this.setOfCheckedId.has(item.id)) && !this.checked;
  }

  onAllChecked(value: boolean): void {
    _.map(this.students, student => this.updateCheckedSet(student.id, value));
    this.refreshCheckedStatus();
  }

  startEdit(id: string): void {
    this.editId = id;
  }

  stopEdit(): void {
    this.editId = null;
  }

  deleteRow(id: number): void {
    this.studentService.deleteStudent(id);
    this.loadData();
  }

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.students = this.studentService.getStudents();
  }

}
