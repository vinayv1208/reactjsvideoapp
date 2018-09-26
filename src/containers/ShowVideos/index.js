import React from 'react';
import {connect} from 'react-redux'
import {getVideos} from '../../actions'
import { ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import VideoCategory from './VideoCategory'
import UserCategory from './UserCategory'
import All from './All'
import GroupBy from './GroupBy'


class ShowVideos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userFilter: 'user',
      videoFilter: 'video',
    }
  }

  componentWillMount() {
    this.props.getVideos()
  } 

  navigateToUpdate(id) {
    this.props.history.push(`update-video/${id}`);
  }

  userChange(userFilter) {
    this.setState(() => ({ userFilter }))
  }

  videoChange(videoFilter) {
    this.setState(() => ({ videoFilter }))   
  }

  render() {
    const { mock } = this.props
    const { userFilter, videoFilter } = this.state;
    console.log('stat', this.state)
    return (
      <div className="App-intro"> 
      <ButtonToolbar className="col-sm-6 col-md-6">
        <ToggleButtonGroup type="radio" name="category" onChange={this.userChange.bind(this)} defaultValue={userFilter}>
          <ToggleButton value='user'>User</ToggleButton>
          <ToggleButton value='category'>Group</ToggleButton>
        </ToggleButtonGroup>
      </ButtonToolbar>

      <ButtonToolbar className="col-sm-6 col-md-6">
        <ToggleButtonGroup type="radio" name="language" onChange={this.videoChange.bind(this)} defaultValue={videoFilter}>
          <ToggleButton value='video'>video</ToggleButton>
          <ToggleButton value='language'>Group</ToggleButton>
        </ToggleButtonGroup>
      </ButtonToolbar>

      {userFilter === 'user' && videoFilter === 'video' && <All mock={mock}/>}
      {userFilter === 'category' && videoFilter === 'video' && <UserCategory mock={mock}/>}
      {userFilter === 'user' && videoFilter === 'language' && <VideoCategory mock={mock}/>}
      {userFilter === 'category' && videoFilter === 'language' && <GroupBy mock={mock}/>}        
      
      </div>
    );
  }
};

function mapStateToProps(state, ownProps) {
  return {
    mock:state.getVideos.getVideos,
    add: state.addVideo.add
  }
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getVideos: () => dispatch(getVideos())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowVideos);
