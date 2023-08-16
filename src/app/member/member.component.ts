import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs'
import { MemberService } from '../services/member-service.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent {

  member$ = this._route.paramMap.pipe(
    map((params) => params.get('memberId')),
    switchMap((memberId) => this._memberService.getMember(Number(memberId)))
    )

  constructor (
    private _route: ActivatedRoute,
    private _memberService: MemberService,
    ) {}

}

