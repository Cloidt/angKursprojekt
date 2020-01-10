import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataStorageService {
  constructur(private http: HttpClient) {}
}
