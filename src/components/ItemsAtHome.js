import React from 'react'

let inventoryItems = require('../data/inventory-items.json');


export default function ItemsAtHome() {
    return (
        <div className='bg-[#3A3D54] mb-5 w-48 h-10 rounded'>
            <p className='center-text text-sm font-medium text-[#9CB8FF]'>Items at home : {countItemsAtHome()}</p>
        </div>
    )
}

function countItemsAtHome() {
    let count = 0
    inventoryItems.forEach(item => {
        if (item.receptionStatus != "Consigned" && item.stateOfSale == "Not Sold" ) {
            count++
        }
    });
    console.log(count)
    console.log(inventoryItems)

    return count
}
