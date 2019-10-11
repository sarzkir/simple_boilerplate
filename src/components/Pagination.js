import React from 'react'

const Pagination = (props) => {

  const perPage = parseInt(props.perPage, 10) || 10
  const currentPage = parseInt(props.currentPage, 10)

  const range = [];
  for (let i=1; i <= Math.ceil(parseInt(props.total, 10))/ perPage; ++ i)
    range.push(i)

  const liActiveClassName = props.liActiveClassName || 'active'
  const spanClassName = props.spanClassName || ''
  const spanActiveClassName = props.spanActiveClass || ''

  const showPrevNext = props.showPrevNext
  const prevText = props.firstText || 'Prev'
  const nextText = props.lastText || 'Next'

  const showFirstlast = props.showFirstlast

  const firstText = props.firstText || 'First'
  const lastText = props.lastText || 'Last'

  const limitSide = parseInt(props.limitSide, 10) || 2

  const pageShowLimit = {
    min: ((currentPage - limitSide) > 0 ? (currentPage - limitSide) : 1),
    max: ((currentPage + limitSide)) < range[range.length-1] ? (currentPage + limitSide) : range[range.length-1]
  }

  return (
    <nav className={props.className}>
      <ul className={`pagination ${props.ulClassName}`}>
        {
          (showFirstlast && currentPage !== 1) && (
            <li onClick={(e)=>handlePageClick(e, 1)} className={`page-item ${props.liClassName ? props.liClassName : ''}`}>
              <span className={`${spanClassName}`}>{firstText}</span>
            </li>
          )
        }
        {
          (showPrevNext && currentPage !== 1) && (
            <li onClick={ e => handlePageClick(e, (currentPage-1)) } className={`page-item ${props.liClassName ? props.liClassName : ''}`}>
              <span className={`${spanClassName}`}>{prevText}</span>
            </li>
          )
        }
        {
          range.map( page => {
            const current = currentPage === page
            if(page < pageShowLimit.min || page > pageShowLimit.max) return ""
            return (
              <li onClick={(e)=>handlePageClick(e, page)} key={page} className={`page-item ${props.liClassName ? props.liClassName : ''} ${current ? liActiveClassName: ''}`}>
                <span className={`${spanClassName} ${current ? spanActiveClassName: ''}`}>{page}</span>
              </li>
            )
          } )
        }
        {
          (showPrevNext && props.currentPage !== range[range.length-1]) && (
            <li onClick={ e => handlePageClick(e, (currentPage+1)) } className={`page-item ${props.liClassName ? props.liClassName : ''}`}>
              <span className={`${spanClassName}`}>{nextText}</span>
            </li>
          )
        }
        {
          (showFirstlast && props.currentPage !== range[range.length-1]) && (
            <li onClick={(e)=>handlePageClick(e, range[range.length-1])} className={`page-item ${props.liClassName ? props.liClassName : ''}`}>
              <span className={`${spanClassName}`}>{lastText}</span>
            </li>
          )
        }
      </ul>
    </nav>
  )

  function handlePageClick(e, page){
    e.preventDefault()
    if(props.onPageClick)
      props.onPageClick(page)
  }

}

export default Pagination