import { useState, useEffect } from 'react';


function addLike() {
    console.log('then we send to the server!')
}

// makes a react like button functional component
// props:
//   onClick: function
//   liked: boolean
//   likes: number
//   className: string
//   children: string
const LikeButton = (props) => {
  const { likeCount, className, children, id } = props;

  const [likes, setLikes] = useState(likeCount)

    const onClick = (e) => {
        e.preventDefault();
        setLikes(likes + 1);
        console.log('then send to the server!')
    }


  useEffect(() =>{
    console.log('useEffect')
    console.log(id)
    
  },[])





  
  return (
    <button
      className={className}
      type="button"
      onClick={onClick}
    >
      {likes}
      {' '}
      {children}
    </button>
  );
};

export default LikeButton;