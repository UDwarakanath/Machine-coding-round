import { useEffect, useState } from "react";
import axios from "axios"
import SkeletonPost from "./skeletons/SkeletonPost";

const App = () => {
      const [users, setUsers] = useState([]);
      const [loading,setLoading] =useState(false)

      useEffect(() => {
        const fetchPosts = async()=>{
          setLoading(true)
          try {
            const res = await axios.get("http://localhost:3500/posts")
            const data =await res.data
            setUsers(data)
            setLoading(false)
          } catch (error) {
            console.log(error)
          }
        }
        fetchPosts()
      },[]);

      const displayUsers = users.map(user=>{
        const {title,body} = user
        return <div>
          <h6>{title}</h6>
          <p>{body}</p>
        </div>
      })

      const displaySkeleton = <div>
      {Array.from({ length: 10 }).map((item,index) => (
            <SkeletonPost key={index}/>
      ))}
</div>


      return<>
       {loading ? displaySkeleton : displayUsers};
      </>
};

export default App;
