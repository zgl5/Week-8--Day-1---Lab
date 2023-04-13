

function AverageRating({reviews}) {

    const calculateReviewsAverage=()=>{
       let average=reviews.reduce((acc,review)=>{
            return acc + review.rating / reviews.length; 
        },0);
        return average > 0 ? average.toFixed(1) : 0;
    };
    return (
         <div className="review">
          <button onClick={calculateReviewsAverage}> <h4> Average</h4></button>  
         </div>
       
    )
    };
        
 export default AverageRating

