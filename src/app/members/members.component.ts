import { Component } from '@angular/core';
import { MemberService } from '../services/member-service.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent {

  memberList$ = this._memberService.getMemberList();

  selectedMember: any

  constructor (private _memberService: MemberService) {}

  selectMember(member: any) {
    this.selectedMember = member;
  }

  clearMember() {
    this.selectedMember = null;
  }

  createMember(member: any) {
    this._memberService.addMember(member).subscribe({
      next: (val) => {
        this.memberList$ = this._memberService.getMemberList()
      },
      error: (err: any) => {
        console.error(err)
      }
    })
  }

  updateMember(member: any) {
    this._memberService.updateMember(member).subscribe({
      next: (val) => {
        this.memberList$ = this._memberService.getMemberList()
      },
      error: (err: any) => {
        console.error(err)
      }
    })
  }

  deleteMember(id: number) {
    const confirmDelete = confirm("Are you sure broski?") 
    if (!confirmDelete) return
    this._memberService.deleteMember(id).subscribe({
      next: (res) => {
        this.memberList$ = this._memberService.getMemberList()
      },
      error: console.log,
    })
  }
}
