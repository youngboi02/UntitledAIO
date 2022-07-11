import DroppedItems from "@/components/DroppedItems";
import Menu from "@/components/Menu";
import SearchAndAddItem from "@/components/SearchAndAddItem";
import InventoryTable from "@/components/tables/InventoryTable";
import ItemsAtHome from "@/components/ItemsAtHome";
import UserTitle from "@/components/UserTitle";

import InventoryStats from "src/pages-components/InventoryStats";
import Footer from "@/components/Footer";
import { useState } from "react";
import ItemModalCreation from "@/components/ItemModalCreation";
import Button from "@/components/Button";


const inventoryItems = require('../data/inventory-items.json');


// Export JSX component
export default function Home() {
  const [filteredInventory, setFilteredInventory] = useState(inventoryItems)
  return (
    <>

      <div id='menu'>
        <div> <Menu /> </div>
      </div>

      <div id='inventory'>
        <div className="grid inventory-top ml-8">
          <div className="relative inventory-top-left">
            <UserTitle />
            <div className="absolute inventory-without-title">
              <ItemsAtHome />
              <DroppedItems onClick={() => {
                console.log('test');
              }} />
              <SearchAndAddItem setFilteredInventory={setFilteredInventory} filteredInventory={filteredInventory} />
            </div>

          </div>
          <div>
            <InventoryStats />
          </div>
        </div>



        <div> <InventoryTable filteredInventory={filteredInventory} /> </div>
      </div>
      <div>
        <ItemModalCreation />
      </div>
    </>
  );
}



