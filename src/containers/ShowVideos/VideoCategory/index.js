import React from 'react';

const VideoCategory = ({mock}) => {

  const navigateToUpdate = (id) => {
    this.props.history.push(`update-video/${id}`);
  }

  const renderVideos = (language) => {
    return (mock && (mock.videodetails).map((item, index) => 
        {
          return (item.language === language && <div key={index} onClick={() => navigateToUpdate(item.id)} className="col-xs-18 col-sm-6 col-md-3">
          <div className="thumbnail">
            <img src="http://placehold.it/500x300" alt="" />
              <div className="caption">
                <h4>Movie Name: {item.name}</h4>
                <p>Director: {item.director}</p>
                <p>Hero: {item.hero}</p>
                <p>Producer: {item.produced_by}</p>
                <p>Budget: {item.budjet}</p>
                <p>Description: {item.discription}</p>
                <p><button className="btn btn-info btn-xs">Update</button> </p>
              </div>
            </div>
          </div>)}
        ))
  }
console.log(mock)
  return (
      <div className="App-intro">
        <div className="row">  
        <h3>English</h3> 
        {renderVideos('English')}
        </div>

        <div className="row"> 
        <h3>Spanish</h3>
        {renderVideos('Spanish')}
        </div>
      </div>
    );
  

}


export default VideoCategory;