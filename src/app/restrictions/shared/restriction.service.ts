import { Injectable }                 from '@angular/core';
import { Http, Response, Headers }    from '@angular/http';
import { Observable }                 from 'rxjs/Rx';

// Somehow this custom class with constnats can't seem to be loaded correctly at run-time.
// For this to be accessible, you need to specify the full path to the file
import { Configuration } 			from '../../../app/app.constants';
import { Restriction } 			from './restriction';

@Injectable()
export class RestrictionService {
  private actionUrl: string;
  private headers: Headers;

    constructor(
			private http: Http,
			private config: Configuration) {
				this.initialise();
    }

	getAll = (): Observable<Restriction[]> =>{
		let results = this.http.get(this.actionUrl + this.config.AzureSubscriptionKeyQueryString)
							.map( (response:Response) => <Restriction[]>response.json() )
							.catch(this.handleError);
		return results;
	}
	
	getById = (id: number) : Observable<Restriction> => {
		// Don't forget about checking if CORS is enabled at the back-end APIs or not
		let result = this.http.get(this.actionUrl + id + '/' + this.config.AzureSubscriptionKeyQueryString)
					.map( (response:Response) => <Restriction> response.json() )
					.catch(this.handleError);
		
		return result;
	}
		
	private initialise()
	{
        this.actionUrl = this.config.ServerWithApiUrl + this.config.FishingRegionRestrictionsPath;

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
		this.headers.append('Access-Control-Allow-Origin', '*');

		// Add Azure API Management subscriotion key here
		this.headers.append('Ocp-Apim-Subscription-Key', '0abdf9f87302408fb323eb715d1c5211');
	}
	
  private handleError(error: Response) {
      console.log(error);
      return Observable.throw('RestrictionService: Server error: ' + error.json().error);
  }
}
