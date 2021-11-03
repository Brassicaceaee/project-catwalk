import React, { useState, useEffect} from 'react';
import Modal from 'react-modal';


const ComparisonModal = ({left, right}) => {

  const[isOpen, setIsOpen] = useState(false);
  const[testFeature, setTestFeature] = useState([]);

  const togglePop = () => {
    setIsOpen(!isOpen)
  };


console.log(left)
//   let featureHolder = {};
//  useEffect( () =>{
//   let mount = true;
//   if(mount && left){
    // const overviewFeatures = left.features.reduce((obj, user) => {
    //   obj[user.feature] = user.value;
    //   return obj;
    // }, {});
    // console.log(overviewFeatures);
//   }
//    return function cleanUp(){
//      mount = false;
//    }
//  }, [])


  const relatedFeatures = right.features.reduce((obj, user) => {
    obj[user.feature] = user.value;
    return obj;
  }, {});


  console.log('compare:', relatedFeatures);

  return (
   <div>
      Test
   </div>
  );
 }


export default ComparisonModal;
