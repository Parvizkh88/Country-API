export interface CountryT {
       readonly flags: { png: string; svg: string };
    readonly languages: { [key: string]: string };
        readonly name: {
      common: string;
      official:string
         };
    readonly population: number;
    readonly region: string;
    // readonly tld?: string[];
    countries:CountryT[]
    data:CountryT[]
      }

   export interface CountriesState {
       countries:CountryT[]
       favorites:CountryT[]
              countrySearched:CountryT[]
       searchInput:string
       isLoading:boolean
       isError: boolean
       message:string
      //  favoriteCount: CountryT[]
          }
   export interface FavoritesState {
             favoriteCountries:CountryT[]
   }