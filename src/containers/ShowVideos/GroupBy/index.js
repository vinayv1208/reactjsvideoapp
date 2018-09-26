import React from 'react';
import UserCategory from './../UserCategory'

const GroupBy = ({mock}) => {

  const renderVideos = (language) => {
    let filterData = []
    if(mock && mock.videodetails){
     filterData = (mock.videodetails).filter(item => item.language === language)
    }
    let obj = {}
    obj['videodetails'] = filterData
    if(filterData.length > 0){
    return <UserCategory mock={obj} />
    }else{
      return null;
    }
  }

  return (
      <div className="App-intro">
        <div className="row">  
        <h2>English</h2> 
        {renderVideos('English')}
        </div>

        <div className="row"> 
        <h2>Spanish</h2>
        {renderVideos('Spanish')}
        </div>

      </div>
    );
  

}


export default GroupBy;