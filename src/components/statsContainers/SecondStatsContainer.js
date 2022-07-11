import React from 'react'

let inventoryItems = require('../../data/inventory-items.json');


export default function SecondStatsContainer() {
  return (
    <div className="second-stats-container">
      <div key="Profit" className="px-4 py-5
            shadow rounded-lg overflow-hidden sm:p-6 second-stats-datas">
        <div className='flex'>
          <dt className="second-stats-title font-medium text-[#9CB8FF]">Profit</dt>
          <dt className="ml-2 font-medium text-[#ffffff]"></dt>
        </div>
        <dd className="mt-1 text-xl font-semibold text-[#79c58c]">{calculateProfit().toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}</dd>
      </div>
      <div key="Profit After Tooling Costs" className="px-4 py-5
            shadow rounded-lg overflow-hidden sm:p-6 second-stats-datas">
        <div className='flex'>
          <dt className="second-stats-title font-medium text-[#9CB8FF]">Profit After Tooling Costs</dt>
          <dt className="ml-2 font-medium text-[#ffffff]"></dt>
        </div>
        <dd className="mt-1 text-xl font-semibold text-[#e9d797]">{ }todo</dd>
      </div>
      <div key="Potential Profit Retail" className="px-4 py-5
            shadow rounded-lg overflow-hidden sm:p-6 second-stats-datas">
        <div className='flex'>
          <dt className="second-stats-title font-medium text-[#9CB8FF]">Potential Profit</dt>
          <dt className="ml-2 font-medium text-[#ffffff]">(all inventory for retail)</dt>
        </div>
        <dd className="mt-1 text-xl font-semibold text-[#79c58c]">{calculateAllInventoryRetail().toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}</dd>
      </div>
      <div key="Potential Profit Resell" className="px-4 py-5
            shadow rounded-lg overflow-hidden sm:p-6 second-stats-datas">
        <div className='flex'>
          <dt className="second-stats-title font-medium text-[#9CB8FF]">Potential Profit</dt>
          <dt className="ml-2 font-medium text-[#ffffff]">(all inventory for resell)</dt>
        </div>
        <dd className="mt-1 text-xl font-semibold text-[#b688f3]">{calculateAllInventoryResell().toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}</dd>
      </div>
    </div>
  )
}

function calculateProfit() {
  let profit = 0

  let totalPurch = 0
  inventoryItems.forEach(item => {
    if (item.stateOfSale == "Sold") {
      totalPurch = totalPurch + item.purchasePrice
    }
  });
  totalPurch = totalPurch


  let totalSold = 0
  inventoryItems.forEach(item => {
    if (item.sellingPrice != null) {
      totalSold = totalSold + parseFloat(item.sellingPrice)
    }
  });

  profit = totalSold - totalPurch
  //return totalPurchase.toFixed(2)
  return profit
}

function calculateAllInventoryRetail() {
  let profit = 0
  let existantProfit = calculateProfit()
  inventoryItems.forEach(item => {
    if (item.stateOfSale == "Not Sold") {
      profit = profit + item.purchasePrice
    }
  });
  return existantProfit + profit
}

function calculateAllInventoryResell(){
  let profit = 0
  let existantProfit = calculateProfit()
  inventoryItems.forEach(item => {
    if (item.stateOfSale == "Not Sold") {
      profit = profit + item.predictionPrice
    }
  });
  return existantProfit + profit
}





















function formatToCurrency(amount) {
  return (amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}
formatToCurrency(12.34546); //"12.35"
formatToCurrency(42345255.356); //"42,345,255.36"