import { useEffect, useState } from "react";
import "../../styles/components/_pagination.scss";
import arrowDownBlue from "../../assets/arrowDownBlue.svg";
import paginationLeftArrow from "../../assets/paginationLeftArrow.svg";
import paginationRightArrow from "../../assets/paginationRightArrow.svg";
import { IProduct } from "../../types";
import { useDispatch } from "react-redux";
import { setProductsByCategory } from "../../store/slices/productsSlice";
import { handleReducerPaginationPages } from "../../helper";
import { nanoid } from "nanoid";

const LIMIT_PER_PAGE = 12;

interface PaginationProps {
  list: IProduct[];
}
const Pagination = ({ list = [] }: PaginationProps) => {
  const dispatch = useDispatch();
  const totalItems = list.length || 0;
  const totalPages = Math.ceil(totalItems / LIMIT_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(1);
  const [isShowAllItems, setIsShowAllItems] = useState(false);
  const startIndex = currentPage * LIMIT_PER_PAGE;
  const endIndex = startIndex - LIMIT_PER_PAGE;
  const paginatedList = list.slice(endIndex, startIndex);
  const reducedTotalPages = handleReducerPaginationPages(
    totalPages,
    currentPage
  );

  // console.log("paginatedList", paginatedList);
  useEffect(() => {
    dispatch(setProductsByCategory(paginatedList));
  }, [dispatch, currentPage]);

  return (
    <section className="paginationContainer">
      <div className="pagination">
        <button
          className="btnPaginationNavigation"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          {" "}
          <img
            src={paginationLeftArrow}
            className="paginationLeftArrow"
            alt=""
          />{" "}
          <span>Prev</span>
        </button>
        <ul className="paginationList">
          {reducedTotalPages &&
            reducedTotalPages.map((pageNumber: number) => (
              <li
                className={`${
                  pageNumber === currentPage
                    ? "paginationItemActive"
                    : "paginationItem"
                } `}
                onClick={() => setCurrentPage(pageNumber)}
                key={pageNumber}
              >
                {pageNumber}
              </li>
            ))}
          {totalPages !== currentPage && (
            <li className="paginationItem" key={nanoid()}>
              {"..."}
            </li>
          )}
          {totalPages !== currentPage && (
            <li
              className={`${
                totalPages === currentPage
                  ? "paginationItemActive"
                  : "paginationItem"
              } `}
              onClick={() => setCurrentPage(totalPages)}
              key={nanoid()}
            >
              {totalPages}
            </li>
          )}
        </ul>
        <button
          className="btnPaginationNavigation"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          {" "}
          <span>Next</span>{" "}
          <img
            className="paginationRightArrow"
            src={paginationRightArrow}
            alt=""
          />
        </button>
      </div>

      <button
        className="btnShowAllItems"
        onClick={() => {
          console.log(isShowAllItems);
          if (!isShowAllItems) {
            setIsShowAllItems(!isShowAllItems);
            setCurrentPage(1);
            dispatch(setProductsByCategory(list));
          } else {
            setIsShowAllItems(!isShowAllItems);
            dispatch(setProductsByCategory(list.slice(0, LIMIT_PER_PAGE)));
            setCurrentPage(1);
          }
        }}
      >
        <span> {isShowAllItems ? "Hidden items" : "Show all items"}</span>
        <img src={arrowDownBlue} alt="" />
      </button>
    </section>
  );
};

export default Pagination;
