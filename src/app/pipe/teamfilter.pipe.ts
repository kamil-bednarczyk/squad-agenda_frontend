import {Pipe, PipeTransform} from '@angular/core';
import {TeamModel} from '../model/team.model';
@Pipe({
  name: 'teamfilter'
})
export class TeamfilterPipe implements PipeTransform {
  transform(items: TeamModel[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }

    searchText = searchText.toLocaleLowerCase();
    return items.filter(team => {

      return team.name.toString().includes(searchText);
    });
  }
}
