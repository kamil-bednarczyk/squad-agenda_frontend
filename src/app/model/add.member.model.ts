export class AddMemberModel {
  teamId: string;
  memberId: string;
  memberName: string;
  status: string;

  constructor(teamId: string, memberId: string, memberName: string, status: string) {
    this.teamId = teamId;
    this.memberId = memberId;
    this.memberName = memberName;
    this.status = status;
  }
}
