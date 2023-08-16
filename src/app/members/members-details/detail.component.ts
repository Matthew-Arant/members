import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { MemberService } from '../../services/member-service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailComponent{

  @Input() set member(value: any) {
    this.memberForm.patchValue(value);
  }
  @Output() memberCreated = new EventEmitter<any>()
  @Output() memberUpdated = new EventEmitter<any>()
  @Output() formCleared = new EventEmitter<any>()
  get selectedMember(): any {
    return this.memberForm.get('id')?.value
  }

  memberForm: FormGroup;
  
  constructor (private _fb: FormBuilder, private _memberService: MemberService) {
    
    this.memberForm = this._fb.group({
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: ''
    });
  }

  emitSave(member: any) {
    if (member.id) {
      this.memberUpdated.emit(member);
    } else {
      this.memberCreated.emit(member);
    }
    this.memberForm.reset();
  }

  emitFormCleared() {
    this.formCleared.emit();
    this.memberForm.reset();
  }

}

