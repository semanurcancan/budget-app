import React, { Component, component, useRef, useState } from "react";


const Wage = (props) => {
    return (
        <div className="pt-16">
            <h6 className="text-base text-emerald-700">Enter Your Income</h6>
            <div >
                <input className="px-2 py-1 placeholder-slate-300 relative bg-white2  rounded text-sm border-0 shadow outline-none w-16"
                    onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            props.setIncome(parseInt(e.target.value))
                        }
                    }}
                    type="text"
                    placeholder="Income.."
                />
            </div>
        </div>
    )

}

export default Wage;