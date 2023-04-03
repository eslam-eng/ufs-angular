import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IReqUserProfile } from './IReqUserProfile';
import { Auth } from '../shared/auth';
@Injectable({ providedIn: 'root' })

export class UserProfileService {
    constructor(private http: HttpClient) { }
 
    public getProfile() {
        return this.http.get(`profile?api_token=` + Auth.getApiToken());
    }
 
    public updateProfile(data) {
        data.api_token = Auth.getApiToken();
        return this.http.post(`profile/update`, data);
    }
 
    public updateProfileImage(data: FormData) {
        data.append('api_token', Auth.getApiToken());
        return this.http.post(`profile/update`, data);
    }

    public updatePassword(data) {
        data.api_token = Auth.getApiToken();
        return this.http.post(`profile/update-password`, data);
    }
 
    public updatePhone(data) {
        data.api_token = Auth.getApiToken();
        return this.http.post(`profile/update-phone`, data);
    }
}
