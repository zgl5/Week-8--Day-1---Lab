import { useState } from 'react';
function Reviews() {
const [rating, setRating] = useState(0);
const [text, setText] = useState(<h4> Reviews</h4>);
const handleClick = () => {
  setRating(prev => {
  return prev + 1;
 });
};
return (
  <div className="card">
    <div className="num-display">{rating}</div>
    <div className="text-display">{text}</div>
    <button onClick={handleClick}>Click</button>
  </div>
 );
}
export default Reviews;