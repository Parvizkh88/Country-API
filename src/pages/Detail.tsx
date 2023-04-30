import { useLocation } from "react-router"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import { FaAngleLeft } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux'
import {searchByName} from '../redux/countries/countriesSlice'
import Countries from "../components/Countries"
import { CountriesState } from "../types/CountryTypes"

const Detail = () => {
 
const {countries, isError, message, isLoading, countrySearched} =
 useAppSelector((state)=> state.countriesR);
const dispatch = useAppDispatch();
type NameParams = {
  name: string;
};
const {name} = useParams<NameParams>();
// console.log(name);

useEffect(()=>{
   dispatch(searchByName(name))
  }, [dispatch, name])

  console.log(countrySearched);

  return (
    <div>
      {countrySearched && <> 
        <h1 style={{marginLeft:'35rem'}}>Country detail </h1>
        <Card style={{ width: '18rem', marginLeft:'35rem', marginTop:'10rem'}}>
      <Card.Img variant="top" src={countrySearched[0]?.flags.svg} />
      <Card.Body>
        <Card.Title>{countrySearched[0]?.name.official}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{countrySearched[0]?.region}</Card.Subtitle>
        <Card.Text>
         This country is in <b>{countrySearched[0]?.region}</b> continent
         and its population is <b>{countrySearched[0]?.population}</b> people. example text to build on the card title and make up the
          bulk of the card content
        </Card.Text>
        <Link to='/'>
       <FaAngleLeft /> 
        </Link>
             </Card.Body>
    </Card>
  </>}
  </div>
     )
}

export default Detail