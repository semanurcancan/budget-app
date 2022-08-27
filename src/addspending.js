import React, { Component, component, useRef } from "react";

const AddSpendingForm = (props) => {
    const productInput = useRef(null);
    const valueInput = useRef(null);
    const selectOption = useRef(null);
    const dateInput = useRef(null);
    const createItem = () => { 
        props.addItems({
            kategori: selectOption.current.value,
            value: parseInt(valueInput.current.value),
            urun: productInput.current.value,
            date: dateInput.current.value
        
        })
    }
    
    
    return (
        
            <div className="space-x-3">
                <input className="rounded-md border-1 focus:outline-none  shadow-xl bg-white " ref={productInput} type="text" name="desc" placeholder="Income desc.." />
                <input  className="rounded-md border-1 focus:outline-none  shadow-xl bg-white " ref={valueInput} type="number" name="price" placeholder="Price.." />
                <input className="rounded-md border-1 focus:outline-none shadow-xl bg-white " ref={dateInput} type="date" name="date" placeholder="ıncome date.." />

                <label>
                    <select className="rounded-md border-1 focus:outline-none shadow-xl bg-white " ref={selectOption}>
                        <option value="clothes" >clothes</option>
                        <option value="rent">rent</option>
                        <option value="invoice">invoice</option>
                        <option value="Market">Market</option>
                        <option value="entertainment">entertainment spending</option>
                    </select>
                </label>
                <button className=" bg-transparent hover:bg-gray-200 text-green-300 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded" type="button" value="ekle" onClick={createItem}>ADD</button>
            </div>
        
    )
}
export default AddSpendingForm;