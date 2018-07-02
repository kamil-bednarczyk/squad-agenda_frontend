import {MemberModel} from './member.model';

export class TeamModel {
   id: string;
   name: string;
   description: string;
   ownerName: string;
   members: MemberModel[] = [];
}
