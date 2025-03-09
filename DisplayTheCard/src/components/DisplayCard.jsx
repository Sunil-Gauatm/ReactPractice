import React, { useState,useEffect} from 'react'
import "./DisplayCard.css"

const  DisplayCard = () => {
    const[value,setValue] = useState([])
  

    useEffect(  () => {
        async function FetchData()  {
            let data = await fetch('https://jsonplaceholder.typicode.com/posts')
            let jData = await data.json()
            setValue(jData)
        }
        FetchData()
    
    }, [])

  return (
    <div className='CardsTitle'>
      
            {value.map(value=>( 
                <div className='Cards' key={value.id}>
                    <h2 >{value.title}</h2> 
                    <p> {value.body}</p>

                </div>

            ))}
       
        
        

      
    </div>
  )
}

export default DisplayCard
