import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembersComponent } from './members/members.component';
import { ListComponent } from './members/members-list/list.component';
import { MemberComponent } from './member/member.component';

const routes: Routes = [{
  path: '',
  component: MembersComponent,
},
{
  path: 'member/:memberId',
  component: MemberComponent,
},
{
  path: '*',
  redirectTo: '/'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
