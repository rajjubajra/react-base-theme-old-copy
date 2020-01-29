import { FETCH_POSTS, NEW_POST } from './types';


export default function fetchPosts() {
  console.log('dispaching....')
  // return function (dispatch) {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(res => res.json())
  //     .then(posts => dispatch({
  //       type: FETCH_POSTS,
  //       payload: posts
  //     }));
  // }
}

//CLEANER WAY OF THE ABOVE CODE
// export const fetchPosts = () => dispatch => {
//   console.log('fetching...');
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(posts => dispatch({
//       type: FETCH_POSTS,
//       payload: posts
//     })
//     );
// }