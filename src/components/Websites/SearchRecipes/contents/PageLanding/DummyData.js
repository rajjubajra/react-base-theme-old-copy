import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Recipes from './Recipies';
import Loading from './Loading';
import NextPrev from './NextPrev';
import { actionDummyData } from '../../action/actionDummyData';


const DummyData = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionDummyData());
  }, [dispatch])


  const status = useSelector(state => state.reducerDummyData.status);
  const result = useSelector(state => state.reducerDummyData.result);
  let hits = useSelector(state => state.reducerDummyData.hits);
  let from = useSelector(state => state.reducerDummyData.from);
  let to = useSelector(state => state.reducerDummyData.to);

  console.log("DUMMY hits[0]", hits.length > 0 ? hits[0].recipe : '');

  return (
    <div>
      <div className="search-text">
        {status ? <h3>Search item:  {result.q} </h3> : ''}
      </div>
      <div className="recipes">
        {
          /** LIST OF RECIPES */
          status ?
            hits.length > 0
              ? hits.map((item, index) => {
                return <div key={index} >
                  <Recipes item={item.recipe} />
                </div>
              })
              : <Loading />
            : ''
        }
      </div>

      {
        /** RECIPE DETAILS */
        hits.length > 0 ?
          <div>
            {/* <Recipe item={hits[0].recipe} /> */}
          </div>
          : <Loading />
      }

      {/* {
        status ?
          hits.length > 0
            ? hits.map((item, index) => {
              return <div key={index}>
                <List item={item.recipe} />
              </div>
            })
            : <Loading />
          : ''
      } */}

      {
        hits.length > 0
          ? <div><NextPrev text={result.q} from={from} to={to} /></div>
          : ''
      }
    </div>
  )
}
export default DummyData;
