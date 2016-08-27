import { Injectable } from '@angular/core';

// application-level (global) constatns

@Injectable()
export class Configuration {
	// AZURE
    public Server: string = 'http://mpifisheriesdemo.azure-api.net/';
    public ApiUrl: string = 'fishing-rules/';

	// LOCAL
    //public Server: string = 'http://localhost:8080/';
    //public ApiUrl: string = 'MpiFishingRulesLinqApi/';

    public ServerWithApiUrl = this.Server + this.ApiUrl;
	
	public FishingRegionsPath: string = 'FishingRegions/';
	public MarineAreasPath: string = 'MarineAreas/';
	public FishListPath: string = 'FishList/';
	public FishingRulesPath: string = 'FishingRules/';
	public FishingRegionRulesPath: string = 'FishingRegionRules/';
	public FishingRegionRestrictionsPath : string = 'FishingRegionRestrictions/';
	
	public AzureSubscriptionKeyQueryString: string = '?subscription-key=0abdf9f87302408fb323eb715d1c5211';
}