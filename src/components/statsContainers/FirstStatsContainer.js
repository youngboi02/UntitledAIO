let inventoryItems = require('../../data/inventory-items.json');


export default function FirstStatsContainer() {
  return (
    <div className="first-stats-container">
      <div key="Total Purchase" className="px-4 py-5
            shadow rounded-lg overflow-hidden sm:p-6 first-stats-datas">
        <dt className="text-sm font-medium text-[#9CB8FF] truncate">Total Purchase</dt>
        <dd className="mt-1 text-xl font-semibold text-[#e9d797]">{calculateTotalPurchase()}</dd>
      </div>

      <div key="Turnover" className="px-4 py-5
            shadow rounded-lg overflow-hidden sm:p-6 first-stats-datas">
        <dt className="text-sm font-medium text-[#9CB8FF] truncate">Turnover</dt>
        <dd className="mt-1 text-xl font-semibold text-[#e9d797]">{calculateTurnover().toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}</dd>
      </div>

    </div>
  )
}

export function calculateTotalPurchase() {
  let totalPurchase = 0
  inventoryItems.forEach(item => {
    totalPurchase = totalPurchase + item.purchasePrice
  });
  //return totalPurchase.toFixed(2)
  return totalPurchase.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })
}

function calculateTurnover() {
  let totalPurchase = 0
  inventoryItems.forEach(item => {
    if(item.stateOfSale == "Sold"){
      totalPurchase = totalPurchase + item.sellingPrice
    }
  });
  //return totalPurchase.toFixed(2)
  return totalPurchase
}
