import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from '../config/config.js'

function useFetch(url){
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const options = {
    headers: {'Authorization': API_KEY}
  };

  useEffect (() => {
    axios
      .get(url, options)
      .then( response => {
        // console.log(response.data)
        setData(response.data);
      })
      .catch( err => {
        setError (err)
      })
    }, [url])

    return {data, error}
}

export default useFetch;