import QuoteButton from "./QuoteButton"



const QuoteBox = ({quote, getNewValues,backgroundObject,colorObjet}) => {
  

  return (
    <article className="quoteBox">
        <i style={colorObjet} className='bx bxs-quote-alt-left'></i>
      <p style={colorObjet}>{quote.quote} </p>
      <h3 style={colorObjet}>{quote.author}</h3>
     
      <section className="quote-footer">
      <QuoteButton getNewValues={getNewValues} backgroundObject={backgroundObject}/>
    
      </section>
      

    </article>
     
     
     
     
     
     
    
  )
}

export default QuoteBox
