import { Injectable } 				from '@angular/core';
import { Http, Response, Headers } 					from '@angular/http';
import { Observable } 				from 'rxjs/Rx';

import { Configuration } 			from '../../../app/app.constants';
import { MarineArea } 			from './marine-area';

@Injectable()
export class MarineAreaService {
  private actionUrl: string;
  private headers: Headers;

  constructor(
    private http: Http, 
    private config: Configuration) {
      this.initialise();
  }

	getAll = (): Observable<MarineArea[]> =>{
		let results = this.http.get(this.actionUrl + this.config.AzureSubscriptionKeyQueryString)
							.map( (response:Response) => <MarineArea[]>response.json() )
							.catch(this.handleError);
		return results;
	}
	
	getById = (id: number) : Observable<MarineArea> => {
		// Don't forget about checking if CORS is enabled at the back-end APIs or not
		let result = this.http.get(this.actionUrl + id +'/' + this.config.AzureSubscriptionKeyQueryString)
					.map( (response:Response) => <MarineArea> response.json() )
					.catch(this.handleError);
		
		return result;
	}
	
	private initialise()
	{
        this.actionUrl = this.config.ServerWithApiUrl + this.config.MarineAreasPath;

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
		this.headers.append('Access-Control-Allow-Origin', '*');

		// Add Azure API Management subscriotion key here
		this.headers.append('Ocp-Apim-Subscription-Key', '0abdf9f87302408fb323eb715d1c5211');
	}
	
  private handleError(error: Response) {
      console.log(error);
      return Observable.throw(error.json().error || 'MarineAreaService: Server error ');
  }
}
