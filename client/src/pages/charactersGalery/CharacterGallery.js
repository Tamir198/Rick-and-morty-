import { useState } from 'react'
import ReactPaginate from "https://cdn.skypack.dev/react-paginate@7.1.3";
import AllCharacters from '../../componenets/AllCharacters'
import config from '../../confige.json'

import styles from './ChracterGalery.module.css'

const CharacterGallery = () => {
  const [currPage, setCurrPage] = useState(config.StartingPageNum);
  const pageCount = config.pageCount;

  const handlePageClick = (event) => {
    setCurrPage(event.selected + 1);
  };

  return (
    <div>
      <AllCharacters pageNum={currPage} />
      <div className={styles.footer}>
        <p>Page {currPage} / {pageCount}</p>
        <ReactPaginate className={styles.test}
          nextLabel="Next"
          previousLabel="Previous"
          onPageChange={handlePageClick}
          pageRangeDisplayed={config.pageRangeDisplayed}
          marginPagesDisplayed={config.marginPagesDisplayed}
          pageCount={pageCount}
          breakClassName={styles.test}
          breakLabel="..."
        />
      </div>
    </div>
  )
}

export default CharacterGallery
