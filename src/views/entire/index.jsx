import { fetchRoomListAction } from '@/store/modules/entire/createActions'
import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import EntireFilter from './c-cpns/entire-filter'
import EntireRooms from './c-cpns/entire-filter/entire-rooms'
import EntirePagination from './c-cpns/entire-pagination'
import { EntireWrapper } from './style'

const Entire = memo(() => {
  // 发送网络请求，获取数据，并且保存当前的页面等等.....
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRoomListAction())
  }, [dispatch]);
  return (
    <EntireWrapper>
      <EntireFilter/>
      <EntireRooms/>
      <EntirePagination></EntirePagination>
    </EntireWrapper>
  )
})

export default Entire
