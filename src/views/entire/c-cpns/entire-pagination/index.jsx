import React, { memo } from "react";
import { Pagination } from "@mui/material";
import { PaginationWrapper } from "./style";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRoomListAction,
} from "@/store/modules/entire/createActions";

const EntirePagination = memo(() => {
  const { totalCount, currentPage, roomList } = useSelector((state) => {
    return {
      totalCount: state.entire.totalCount,
      currentPage: state.entire.currentPage,
      roomList: state.entire.roomList,
    };
  });

  // 小算法：必须掌握
  const startCount = currentPage * 20 + 1;
  const endCount = (currentPage + 1) * 20;
  const totalPage = Math.ceil(totalCount / 20);

  // 事件处理的逻辑
  const dispatch = useDispatch();
  function pageChangeHandle(event, pageCount) {
    // 更新最新的页码：redux => currentPage
    // dispatch(changeCurrentPageAction(pageCount - 1));
    dispatch(fetchRoomListAction(pageCount - 1))
  }

  return (
    <PaginationWrapper>
      {
        !!roomList.length && (
            <div className="info">
                <Pagination
                    count={totalPage}
                    color="primary"
                    onChange={pageChangeHandle}
                ></Pagination>
                <div className="desc">
                    第 {startCount} - {endCount} 个房源，共超过{totalCount}个
                </div>
            </div>
        )
      }
    </PaginationWrapper>
  );
});

export default EntirePagination;
