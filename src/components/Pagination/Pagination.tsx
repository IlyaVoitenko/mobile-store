import { useEffect, useState } from "react";
import "../../styles/components/_pagination.scss";
import arrowDownBlue from "../../assets/arrowDownBlue.svg";
import paginationLeftArrow from "../../assets/paginationLeftArrow.svg";
import paginationRightArrow from "../../assets/paginationRightArrow.svg";
import { IProduct } from "../../types";
import { useDispatch } from "react-redux";
import { setProducts } from "../../store/slices/productsSlice";

const LIMIT_PER_PAGE = 12;

interface PaginationProps {
  list: IProduct[];
}
const Pagination = ({ list }: PaginationProps) => {
  const dispatch = useDispatch();
  const totalItems = list.length;
  const totalPages = Math.ceil(totalItems / LIMIT_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(1);
  const [isShowAllItems, setIsShowAllItems] = useState(false);
  const startIndex = currentPage * LIMIT_PER_PAGE;
  const endIndex = startIndex - LIMIT_PER_PAGE;
  const paginatedList = list.slice(endIndex, startIndex);

  useEffect(() => {
    dispatch(setProducts(paginatedList));
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
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (pageNumber: number) => (
              <li
                className="paginationItem"
                onClick={() => setCurrentPage(pageNumber)}
                key={pageNumber}
              >
                {pageNumber}
              </li>
            )
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
            dispatch(setProducts(list));
          } else {
            setIsShowAllItems(!isShowAllItems);
            dispatch(setProducts(list.slice(0, LIMIT_PER_PAGE)));
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
