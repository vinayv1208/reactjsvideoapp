import React from 'react';

const All = ({mock}) => {

  const navigateToUpdate = (id) => {
    this.props.history.push(`update-video/${id}`);
  }

  const renderVideos = () => {
    return (mock && (mock.videodetails).map((item, index) => 
    <div key={index} onClick={() => navigateToUpdate(item.id)} className="col-xs-18 col-sm-6 col-md-3">
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
          </div>
        ))
  }

  return (
      <div className="App-intro">
        <div className="row">  
        <h3>All</h3> 
        {renderVideos('premium')}
        </div>
      </div>
    );
  

}


export default All;