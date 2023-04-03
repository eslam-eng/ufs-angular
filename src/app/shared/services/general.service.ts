import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Auth } from '../../shared/auth';

@Injectable({providedIn: 'root'})
export class GeneralService {
  constructor(private http: HttpClient) {
  }

  public getAllCountries() {
    return this.http.get(`countries?api_token=` + Auth.getApiToken());
  }
  public getAllCities() {
    return this.http.get(`cities?api_token=` + Auth.getApiToken());
  }
  public getAllGovernments() {
    return this.http.get(`governments?api_token=` + Auth.getApiToken());
  }
  public getCountryGovernments(id: string) {
    return this.http.get(`government/`+ id +`?api_token=` + Auth.getApiToken());
  }
  public getAllLevels(){
    return this.http.get(`levels?api_token=` + Auth.getApiToken());
  }
  public getAllAcademicYears(){
    return this.http.get(`academic-years?api_token=` + Auth.getApiToken());
  }
  public getAllQualifications() {
    return this.http.get(`qualifications?api_token=` + Auth.getApiToken());
  }

  public getAllDepartments(){
    return this.http.get(`departments?api_token=` + Auth.getApiToken());
  }
  public getAllMilitaryAres(){
    return this.http.get(`military-area-submission?api_token=` + Auth.getApiToken());
  }
  getAllUsers(query: any) {
    const params = new HttpParams()
      .set('page', query.page)
      .set('size', query.size)
      .set('email', query.email || '')
      .set('userName', query.userName || '');
    return this.http.get('adminUsers/users', {params});
  }
}
