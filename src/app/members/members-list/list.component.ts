import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent{

@Input() memberList?: any[]
@Output() memberDeleted = new EventEmitter<number>();
@Output() memberSelected = new EventEmitter<any>();

emitMemberDeleted(id: number) {
  this.memberDeleted.emit(id)
}

emitMemberSelected(member: any) {
  this.memberSelected.emit(member)
}

}
