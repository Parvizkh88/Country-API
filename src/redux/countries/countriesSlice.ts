import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

import { CountriesState, CountryT } from '../../types/CountryTypes'


const baseURL = 'https://restcountries.com/v3.1/all'

const initialState :CountriesState ={
   countries:[],
   favorites:[],
     countrySearched:[],
     searchInput:'',
     isLoading:false,
       isError: false,
       message:'',
       }

const fetchCountries = createAsyncThunk( 'countries/fetchCountries',
 async () => {
    let response = await axios.get(baseURL) 
    let data:CountryT[]= await response.data
    return data
  }
)


// search to direct to detail page ---------------------------
const searchByName = createAsyncThunk( 'countries/searchByName',
 async (name:string|undefined, thunkAPI) => {
    let response = await axios.get(`https://restcountries.com/v3.1/name/${name}?fullText=true`) 
       let data:CountryT[]= await response.data
    return data
  }
);

 const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
      addToFavorites: (state, action: PayloadAction<CountryT>) => {
      const existingCountry = state.favorites.find(
        (country) => country.name.common === action.payload.name.common
      );
      if (!existingCountry) {
        state.favorites.push(action.payload);
      }
    },
    removeFromFavorites:(state, action:PayloadAction<CountryT>) =>{
      state.favorites = state.favorites.filter(
        (country) => country.name.common !== action.payload.name.common
      ); 
    },
    setSearchInput:(state, action)=>{
      state.searchInput = action.payload
    }
      },
 
   extraReducers: (builder) => {
       builder.addCase(fetchCountries.fulfilled, (state, action)=>{
      state.countries= action.payload
      state.isLoading = false
      state.isError = false
      state.message = 'Countries fetched successfully'
    })
      builder.addCase(fetchCountries.rejected, (state, action) => {
      state.countries = []
      state.isError = true
      state.isLoading = false
      state.message = 'Error fetching countries'
    })
     builder.addCase(fetchCountries.pending, (state, action) => {
      state.isLoading = true
      state.message = 'Loading...'
    })
    // Search by country to direct to detail page builders -----------
      builder.addCase(searchByName.fulfilled, (state, action)=>{
      // state.countries= action.payload
      console.log(action.payload);
      
      state.countrySearched = action.payload
      state.isLoading = false
      state.isError = false
      state.message = 'Country detail successful'
    })
      builder.addCase(searchByName.rejected, (state, action) => {
      // state.countries = []
       state.countrySearched = []
      state.isError = true
      state.isLoading = false
      state.message = 'Error in Countriy detail'
    })
     builder.addCase(searchByName.pending, (state, action) => {
      state.isLoading = true
      state.message = 'Loading...'
    })
  },
})


export  { fetchCountries, searchByName } 
export const {addToFavorites, setSearchInput, removeFromFavorites} = countriesSlice.actions;
export default countriesSlice.reducer