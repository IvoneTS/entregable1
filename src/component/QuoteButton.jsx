

const QuoteButton = ({getNewValues, backgroundObject}) => {
    
 
   return (
    <button onClick={getNewValues} style={backgroundObject}>
      <i className='bx bxs-chevrons-right' ></i>
    </button>
  )
}

export default QuoteButton
