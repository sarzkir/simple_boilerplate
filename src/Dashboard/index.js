import React, { useState } from "react"
import Pagination from "../components/Pagination";
import RouterContainer from "../components/RouteContainer";

const DashboardContainer = (props) => {

  console.log("@DashboardContainer [props]", props)

  const [items, setItems] = useState({
    currentPage: 2,
    total: 100,
    perPage: 10
  })

  return (
    <div className="dashboard-container">
      <h1>Dashboard Confessional</h1>
      <Pagination
        total={items.total}
        perPage={items.perPage}
        currentPage={items.currentPage}
        ulClassName="ul-class-name"
        liClassName="li-class-name"
        liActiveClassName="li-active-class-name"
        spanClassName="span-class-name"
        spanActiveClassName="span-active-class-name"
        onPageClick={handleOnPageClick}
        showFirstlast={true}
        showPrevNext={true}
        />
        <RouterContainer routes={props.routes} />
    </div>
  )

  function handleOnPageClick(page) {
    console.log("[page], [items.currentPage]", page, items.currentPage)
    if(page !== items.currentPage)
      setItems({...items, currentPage: page})
    console.log("[items]", items)
  }

}

export default DashboardContainer