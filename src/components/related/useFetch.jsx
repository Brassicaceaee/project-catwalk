import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from '../config/config.js'

function useFetch(url){
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    headers: {'Authorization': API_KEY}
  };

  useEffect (() => {
    setLoading (true);
    axios
      .get(url, options)
      .then( response => {
        console.log(response.data)
        setData(response.data);
      })
      .catch( err => {
        setError (err)
      })
      .finally(() =>{
        setLoading(false)
      })
    }, [url])

    return {data, loading, error}
}




export default useFetch;