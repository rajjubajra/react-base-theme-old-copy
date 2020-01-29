import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
//import { fetchPosts } from '../../../redux/actions/postAction';
//import { useFetch } from './UseFetch';
import PostView from './PostView';


const PostData = () => {
  //const [data, loading] = useFetch('https://jsonplaceholder.typicode.com/posts');

  const [loading, setLoading] = useState(true);

  const data = useSelector(state => state);

  console.log(' DATA FROM REDUX ', data);

  return (
    <div>
      {
        loading ? 'Loading...' :
          data.map(item => {
            return <PostView key={item.id} title={item.title} body={item.body} />
          })
      }

    </div>
  )
}

export default PostData
