import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) { }
  
  getRepoList(listPerPage, query, page ) {
    return this.http.get('https://api.github.com/search/repositories?per_page=' + listPerPage +'&q=' + query + '&page=' + page)
  }
}
