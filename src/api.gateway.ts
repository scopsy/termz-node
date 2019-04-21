import axios from 'axios';

export class ApiGateway {
  private http = axios.create({
    baseURL: 'http://api.termz.io/v1',
    headers: {
      'Authorization': 'ApiKey ' + this.API_KEY
    }
  });

  constructor(private API_KEY: string) {

  }

  post<T>(url: string, data: any) {
    return this.http.post<T>(url, data);
  }
}
