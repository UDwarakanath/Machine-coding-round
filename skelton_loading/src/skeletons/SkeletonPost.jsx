import Skeleton from "./Skeleton"


const SkeletonPost = () => {
  return (
    <div className="container"> 
      <Skeleton classess={`profile`}/>
      <Skeleton classess={`title width-100`}/>
      <Skeleton classess={`text width-50`}/>
      <Skeleton classess={`text width-50`}/>
    </div>
  )
}

export default SkeletonPost