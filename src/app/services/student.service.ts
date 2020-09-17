import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { STUDENTS } from './mock-student';
import { Student } from '../student';
import _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students = STUDENTS;

  getStudents(): Student[]  {
    return this.students;
  }

  createStudents(info: Student): void {
    this.students = _.concat(this.students, info);
  }

  deleteStudent(id: number): void {
    this.students = _.filter(this.students, student => student.id !== id);
  }
}
