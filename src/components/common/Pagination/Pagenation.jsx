import React from 'react';
import s from './Pagenation.module.css'

let Pagenation = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    if (pagesCount > 40) {
        pagesCount = 40;
    }

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return <div>
        <div>
            {pages.map(p => {
                return <span className={currentPage === p && s.selectedPage}
                    onClick={() => { onPageChanged(p) }}>{p} </span>

            })}
        </div>

    </div >
}

export default Pagenation;