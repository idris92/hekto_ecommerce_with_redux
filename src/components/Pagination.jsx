import React from 'react'
import _ from 'lodash'

function Pagination({productCount, page,currentPage, onPageChange}) {
    const pageCount = Math.ceil(productCount/page);
    const pages = _.range(1, pageCount+1);
    return (
        <nav aria-label="Page navigation example">
            <ul class="pagination">
            {
                pageCount === 1 ? '': pages.map((page)=>(

                        <li class={page===currentPage?"page-item active":"page-item"}><a class="page-link" style={{cursor:'pointer'}} onClick={()=>onPageChange(page)}>{page}</a></li>
                        
                        ))
                        // console.log("pages", productCount, page)
                    }
                    </ul>
        </nav>
    )
}

export default Pagination
