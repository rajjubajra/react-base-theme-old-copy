import React from 'react'

const BtnThreelines = (props) => {
  
  /**
   * 
   * Following function need to be run 
   * on parent component 
   * in order to handle whole navigation div
   * 
  
  const [btnclosed , setBtnClosed] = useState('');
  //console.log('btn', btnclosed);

  const navToggle = () => {
    setBtnClosed(btnclosed === '' ? 'open' : '' );
  }



  <BtnThreelines navToggle={navToggle} btnclosed={btnclosed} />
  
  **/

  //"navToggle" from parent component

  return (
    <button className={`nav-toggle ${props.btnclosed}`} onClick={props.navToggle}>
        <span className="threelines"></span>
    </button>
  )
}

export default BtnThreelines
