/* This example requires Tailwind CSS v2.0+ */

export default function InventoryTable({filteredInventory}) {
  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-10">
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block py-2 align-middle md:px-6 lg:px-8">
            <div className="test-table-overflow overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="table-test divide-y divide-[#27282E]">
                <thead className="bg-[#27282E] text-[#9CB8FF]">
                  <tr>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold">
                      SKU
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold">
                      Product
                    </th>

                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold">
                      Size
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold">
                      Purchase Date
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold">
                      Purchase Price
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold">
                      Shopping Site
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold">
                      Receipt Status
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold">
                      Selling Date
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold">
                      Selling Price
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold">
                      Sales Site
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold">
                      Payment Receipt
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold">
                      Sale Status
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold">
                      Profit
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold">
                      Prediction Price
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  {filteredInventory.map((item, itemIdx) => (
                    <tr key={itemIdx} className={itemIdx % 2 === 0 ? 'bg-[#3A3D54]' : 'bg-[#41445c]'}>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white">{item.sku}</td>
                      <td className="whitespace-nowrap w-8 px-3 py-4 text-sm text-white">{item.product}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white">{item.size}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white">{item.purchaseDate}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white">{item.purchasePrice} €</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white">{item.shoppingSite}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white"><img className='w-4' src={displayIconsReceivingStatus(item)}></img></td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white">{item.saleDate}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white">{displaySellingPriceCurrency(item)}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white">{item.salesSite}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white"><img className='w-4' src={displayIconsPaymentReceiptStatus(item)}></img></td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white">{item.stateOfSale}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white">{displayCurrency(item)}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white">{displayPredictPrice(item)}</td>
                      <td className="sm:pr-8 flex">
                          <img className='w-4 mt-4' src='/imgs/pencil.png'></img>
                          <img className='w-4 ml-2 mt-4' src='/imgs/trash.png'></img>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function calculateItemProfit(item) {
  let profit = 0
  switch (item.stateOfSale) {
    case "Sold":
      profit = item.sellingPrice - item.purchasePrice
      break;
    case "Not Sold":
      profit = null
      break;
    case "Kept":
      profit = null
      break;
  }
  return profit
}

function displayCurrency(item) {
  let res
  if (calculateItemProfit(item) == null) {
    res = ''
  } else {
    res = calculateItemProfit(item).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0, maximumFractionDigits: 2 })
  }
  return res
}

function displayPredictPrice(item) {
  let res
  if (item.predictionPrice == null) {
    res = ''
  } else {
    res = item.predictionPrice.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0, maximumFractionDigits: 2 })
  }
  return res
}

function displaySellingPriceCurrency(item) {
  let res
  if (item.sellingPrice == null) {
    res = ''
  } else {
    res = item.sellingPrice.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0, maximumFractionDigits: 2 })
  }
  return res
}

function displayIconsReceivingStatus(item) {
  let img
  switch (item.receptionStatus) {
    case "Received":
      img = "/imgs/check.png"
      break;
    case "Consigned":
      img = "/imgs/consigned.png"
      break;
    case "Not Received":
      img = "/imgs/cross.png"
      break;
    default:
      img = ""
      break;
  }
  return img
}

function displayIconsPaymentReceiptStatus(item) {
  let img
  switch (item.receptionStatus) {
    case "Received":
      img = "/imgs/check.png"
      break;
    case "Not Received":
      img = "/imgs/cross.png"
      break;
    default:
      img = ""
      break;
  }
  return img
}