import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import LanPasaaTitle from '../header/LanPasaaTitle'
import NavByGroup from '../nav/NavByGroup'
import Shop from '../page/Shop/Shop';
import { actionFetchData } from '../../actions/actionFetchData';



const PageLanPasaaShop = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionFetchData());
  }, [dispatch])

  return (
    <div className="lanpasaa">
      <LanPasaaTitle />
      <NavByGroup />
      <div className="divider"></div>
      <Shop />
    </div>
  )
}

export default PageLanPasaaShop
