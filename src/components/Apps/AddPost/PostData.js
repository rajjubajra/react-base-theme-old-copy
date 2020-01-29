import React from 'react'
import { useFetch } from './UseFetch';
import PostView from './PostView';


const PostData = () => {
  const [data, loading] = useFetch('https://jsonplaceholder.typicode.com/posts');
  console.log(data);
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
