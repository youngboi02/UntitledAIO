let inventoryItems = require('../../data/inventory-items.json');

export default function ThirdStatsContainer() {
  return (
    <div className="first-stats-container">
      <div key='Predicted Inventory Value' className="px-4 py-5
            shadow rounded-lg overflow-hidden sm:p-6 first-stats-datas">
        <dt className="text-sm font-medium text-[#9CB8FF] truncate">Predicted Inventory Value</dt>
        <dd className="mt-1 text-xl font-semibold text-[#b688f3]">{calculatePredictedInventoryValue().toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}</dd>
      </div>
      <div key='Retail Value of Inventory' className="px-4 py-5
            shadow rounded-lg overflow-hidden sm:p-6 first-stats-datas">
        <dt className="text-sm font-medium text-[#9CB8FF] truncate">Retail Value of Inventory</dt>
        <dd className="mt-1 text-xl font-semibold text-[#79c58c]">{calculateRetailInventoryValue().toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}</dd>
      </div>
    </div>
  )
}

function calculateRetailInventoryValue() {
  let profit = 0
  inventoryItems.forEach(item => {
    if (item.stateOfSale == "Not Sold") {
      profit = profit + item.purchasePrice
    }
  });
  return profit
}

function calculatePredictedInventoryValue() {
  let profit = 0
  inventoryItems.forEach(item => {
    if (item.stateOfSale == "Not Sold") {
      profit = profit + item.predictionPrice
    }
  });
  return profit
}