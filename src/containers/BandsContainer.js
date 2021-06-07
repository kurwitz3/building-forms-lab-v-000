import React, { Component } from 'react'
import {connect} from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {

  

  render() {
    let bandz = this.props.bands.map(band => <li>{band.name}</li>)
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <ul>
          {bandz}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

 const mapDispatchToProps = dispatch => {
    return {
      addBand: formData => dispatch({type:'ADD_BAND',payload: formData})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
