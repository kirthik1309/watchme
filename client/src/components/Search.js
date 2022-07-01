import {React,useEffect,useState} from "react"

import { client } from '../client';
import { feedQuery, searchQuery } from '../utils/data';
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';


const Search = ({searchTerm}) => {
  const [pins, setPins] = useState()
  const [loading, setLoading] = useState()

  useEffect(() => {
    
    if (searchTerm) {
      setLoading(true);
      // console.log("hi")
      const query = searchQuery(searchTerm.toLowerCase());
      client.fetch(query).then((data) => {
        // console.log("hi")
        setPins(data);
        setLoading(false);
      });
    } else {
      // console.log("hiasd")
      setLoading(true);

      client.fetch(feedQuery).then((data) => {
        setPins(data);
        setLoading(false);
      });
    }
    
  }, [searchTerm])
  
  return  (
  <div>
  {loading && <Spinner message="Searching Pins" />}
  {pins?.length !==0 && <MasonryLayout pins={pins}/>}
  {pins?.length === 0 && searchTerm !== '' && !loading && (
        <div className="mt-10 text-center text-xl ">No Pins Found!</div>
  )}

  </div>
  )
  
}

export default Search