import React from 'react'
import arr from '../data'

const Home = ()=> {

  

    const redirectFunc = (id) =>{
        window.location = `/detail ${id}`
    }
    return (
        <div> { 
           arr.map((ar, i) => (
           <div onClick={()=>redirectFunc(ar.id)} style = {{margin:"15px", cursor:"pointer", border:'1px solid black', padding:'5px', height:'40px', width:'90px' }}>{ar.name}
                </div>
                      
            ))  
        }
           
        </div>
    )
}
export default Home