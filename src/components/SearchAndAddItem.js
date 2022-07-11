import React, { useEffect, useRef, useState } from 'react'

export default function SearchAndAddItem({ setFilteredInventory, filteredInventory }) {
  const inventoryItems = require('../data/inventory-items.json');
  const [filterValue, setFilterValue] = useState('')
  function handleSubmit(){
    console.log("caca")
    setFilteredInventory(filteredInventory.filter((item) => item.product.includes(filterValue)))
  }
  return (
    <div className='inline-block search-add-item'>
      <input onChange={(e) => { setFilterValue(e.target.value); setFilteredInventory(inventoryItems) }} className="appearance-none bg-[#3A3D54] 
                    text-[#9CB8FF] text-xs border-none rounded py-3
                    px-4  focus:outline-none
                    focus:border-[#9CB8FF]" placeholder="Enter a SKU to filter" />
      <button type="button" className="ml-5 px-6 py-2.5 bg-[#9CB8FF] 
                    text-black  text-xs uppercase rounded shadow-md hover:bg-[#7290db]
                    hover:shadow-lg transition duration-300 ease-in-out" onClick={handleSubmit}>Add Item</button>
    </div>
  )
}

/*
<button type="button" className="ml-5 px-6 py-2.5 bg-[#9CB8FF] 
                    text-black  text-xs uppercase rounded shadow-md hover:bg-[#7290db]
                    hover:shadow-lg transition duration-300 ease-in-out">Add Item</button>*/
