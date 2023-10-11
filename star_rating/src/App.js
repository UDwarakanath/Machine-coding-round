
import { useState } from 'react';
import StarRating from './StarRating';

/* 🌟 **Creating a Star Rating Widget with Interactive Functionality**

Requirements:



- Accept two parameters: maximum number of stars and number of currently filled stars.

- When a star is clicked, fill it along with all stars to its left.

- When the user hovers over the stars, fill all stars under the cursor and its left.

- Stars that need to be filled during hover take priority over existing filled state.

- If the cursor leaves the widget and no new selection is made, appropriate stars revert to the filled state before hovering.

- Make the widget reusable so multiple instances can be rendered on the same page.

- Star icons, both empty and filled, are provided as SVGs.

Additional:

- You are free to decide the props of **`<StarRating />`**.
- Do not use any external library. for stars use only astricks (*)
- while clinking the rating start all the rated stars become yellow and after the rated star become blue. 
  example: we have 5 stars and I click 3rd stars then 3 stars become yellow and the rest 2 stars become blue in color.
- add hover effect also

- This question was asked during an interview at Amazon,Uber and Airbnb.

*/


function App() {
  const [currentRating, setCurrentRating] = useState(3)
  return (
    <div className="App">
      <StarRating maxRating={5} currentRating={currentRating} setCurrentRating={setCurrentRating} />
    </div>
  );
}

export default App;
