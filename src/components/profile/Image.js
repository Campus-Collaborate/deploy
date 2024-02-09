const Image = ({imag,imagprop}) => {
    return (
          <img src={require(''+imag)} className={imagprop}/>
      
    )
  }
  
  export default Image