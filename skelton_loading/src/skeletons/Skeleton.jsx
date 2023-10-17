import "./skeleton.css"

const Skeleton = ({classess}) => {
  const classNames = `skeleton ${classess} animate-pulse`
  return (
    <div className={classNames}>
      
    </div>
  )
}

export default Skeleton