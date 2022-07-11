import React from 'react'
import FirstStatsContainer from "@/components/statsContainers/FirstStatsContainer";
import SecondStatsContainer from "@/components/statsContainers/SecondStatsContainer";
import ThirdStatsContainer from "@/components/statsContainers/ThirdStatsContainer";

export default function InventoryStats() {
    return (
        <div className='ml-4 mt-4 grid inventory-stats'>
            <FirstStatsContainer />
            <SecondStatsContainer />
            <ThirdStatsContainer />
        </div>
    )
}
