import quoteDB from "./db/quotes.json"
import QuoteBox from "./component/QuoteBox"
import colors from "./db/colors.js"
import { useState } from "react"


  
function App() {

  const getRandom=(array)=>{
    const randomIndex = Math.floor(array.length*Math.random())
    return array[randomIndex]
  }
  //estados o hook//
  const [quote, setQuote]= useState(getRandom(quoteDB))
  const [color, setColor]= useState(getRandom(colors))
  
  const getNewValues= ()=>{
    const newQuote= getRandom(quoteDB)
    const newColor=(getRandom(colors))
    setQuote(newQuote)
    setColor(newColor)
    }
    const backgroundObject={
      backgroundColor: color
    }
    const colorObjet={
      color: color
    }
  
      
     

  

  return (
    <div className="App" style={backgroundObject}>
        <QuoteBox  
        quote={quote} 
        getNewValues={getNewValues} 
        backgroundObject={backgroundObject}
        colorObjet={colorObjet}
        />
   
                             
     
    </div> 
  )
  }

export default App
