import { Component } from '@angular/core';
import { SearchService } from './search.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'github-search';
  query = '';
  repoList: Object;
  page: number = 1;
  listPerPage = 10;
  totalCount = 0;
  maxRecord = 1000; //GitHub only support up to 1000 results only.
  constructor(private search: SearchService) { }

  onEnter(query)
  {
    this.query = query;
    this.page = 1;
    this.search.getRepoList(this.listPerPage, this.query, this.page).subscribe(
      data => this.repoList = data
    )
  }

  changePage(p) {
    this.page = p;
    this.search.getRepoList(this.listPerPage, this.query, this.page).subscribe(
      data => this.repoList = data
    )
  }

  getTotalCount(count)
  {
    if(count > this.maxRecord)
    {
      return 1000;
    }else
    {
      return count;
    }
  }

}
