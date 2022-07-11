import InventoryTable from '@/components/tables/InventoryTable'
import TableFixe from '@/components/tables/InventoryTable'
import { getInventaire } from '@/lib/inventaire'
import React from 'react'

export default function inventaire() {

    const { data, error, mutate, isValidating } = getInventaire()

    return (

        <>
            <InventoryTable />
        </>

    )
}
