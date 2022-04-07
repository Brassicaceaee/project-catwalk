import React, {useContext, useState, useEffect} from 'react';
import axios from 'axios';
import { getOverviewData } from '../../server/controllers/products';

const OverviewContext = React.createContext();
const OverviewUpdateContext = React.createContext();

export const useOverviewContext = () => {
  return useContext(OverviewContext);
}


// Create a provider

export function OverviewProvider({children}) {
  const [overviewData, updateOverviewData] = useState(null)
  
  const update = (productId) => {
    axios.get(`/overview?product_id=${productId}`)
    .then(({data}) => {
      updateOverviewData(data);
    })

  }
  useEffect(() => {
    update(40344);
  }, [])

  if (overviewData) {
    return(
      <OverviewContext.Provider value={overviewData}>
        {children}
      </OverviewContext.Provider>
    )
  } else {
    return <></>;
  }
}