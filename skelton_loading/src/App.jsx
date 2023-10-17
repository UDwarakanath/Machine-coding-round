import SkeletonPost from "./skeletons/SkeletonPost"


const App = () => {
  return <div >
   {
    Array.from({length:10}).map(item=><SkeletonPost/>)
   }
  </div>
}

export default App