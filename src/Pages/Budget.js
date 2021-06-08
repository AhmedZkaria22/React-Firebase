import React from 'react'
import Header from '../Components/Header/Header'
import Input from '../Components/Input/Input'
import ItemList from '../Components/Item List/ItemList'
import '../Components/Header/budgetGeneral.css'
function Budget() {
    return (
        <>        
            <Header />
            <Input />
            <ItemList />
        </>
    )
}

export default Budget
