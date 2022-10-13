import React, { memo, useState } from 'react'
import { FilterWrapper } from './style'
import filterData from "@/assets/data/filter_data.json"
import classNames from 'classnames'

const EntireFilter = memo((props) => {
  const [selectItems, setSelectItems] = useState([]);
  function itemClickHandle(item) {
   const newItems = [...selectItems];
    if(newItems.includes(item)){
      const index = newItems.findIndex(value=>item===value);

      newItems.splice(index,1);
      console.log(index);
    }else{
      newItems.push(item)
      console.log(newItems);
    }
    setSelectItems(newItems);
  }
  return (
    <FilterWrapper>
      {
        filterData.map((item,index)=>{
          return (
            <div key={index} className={classNames("item",{active:selectItems.includes(item)})} 
              onClick={e=>itemClickHandle(item)}
            >
              {item}
            </div>
          )
        })
      }
    </FilterWrapper>
  )
})


export default EntireFilter