import { useState } from "react"
import Star from "./Star"

const StarRating = ({ maxRating, currentRating, setCurrentRating }) => {
  const [hoverState, setHoverState] = useState(3)
  return (
    <div>
      {
        Array.from({ length: maxRating }).map((i, index) => (
          <span
            onClick={() => setCurrentRating(index + 1)}
            onMouseEnter={() => setHoverState(index+1)}
            onMouseLeave={() => setHoverState(null)}>
            <Star filled={hoverState != null ? index < hoverState : index < currentRating} />
          </span>
        ))
      }
    </div>
  )
}

export default StarRating