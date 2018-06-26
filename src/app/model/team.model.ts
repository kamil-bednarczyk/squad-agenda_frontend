import {MemberModel} from './member.model';

export class TeamModel {
   id: string;
   name: string;
   description: string;
   members: MemberModel[] = [];
}
