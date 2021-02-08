import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi.js'

const SushiContainer = (props) => {
   
  
  
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map(sushi => <Sushi sushi={sushi} key={sushi.id} eaten={props.eaten} /> ).slice(props.index, props.index + 4)}
        <MoreButton more={props.more}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer