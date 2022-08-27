import React, { Component, component, useRef } from "react";
import './App.css';
import AddSpendingForm from './addspending';
import Wage from './wage';
import { PieChart, LabelRenderProps } from 'react-minimal-pie-chart';
import { AiOutlineDelete } from 'react-icons/ai';


class Budget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            income: 0,
            items: [
                {
                    kategori: "clothes",
                    value: 500,
                    urun: "gömlek",
                    date: "2022-09-02"
                },
                {
                    kategori: "Market",
                    value: 1000,
                    urun: "dondurma",
                    date: "2022-09-18"
                },
                {
                    kategori: "rent",
                    value: 2300,
                    urun: "ev",
                    date: "2022-09-07"
                },

            ]
        }
        this.addItems = this.addItems.bind(this)
        this.setIncome = this.setIncome.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.colors = ["#7e57c2", "#2196f3", "#80cbc4", "#aed581", "#ff8a65", "#f06292"]
        this.labelStyle= {
            fontSize:'5px'
        }
    }

    deleteItem(item) {
        this.setState((prevState) => {

            const arr = prevState.items.filter((i) => {
                return item !== i
            })
            return {
                items: arr
            }

        })
    }
    setIncome(income) {
        this.setState((prevState) => {
            return {
                income: income
            }
        })
    }

    addItems(item) {
        if (!item) {
            return <div className=" text-purple-500">fiyat eklemediniz</div>
                ;
        } else if (this.state.items.indexOf(item) > -1) {
            return <div className=" text-purple-500">Aynı Üründen Listede Mevcut</div>;
        }

        this.setState((prevState) => {
            return { items: prevState.items.concat(item) }
        });
    }
    //kategorilere göre grupla dedik. ve
    calculateValues(items) {
        let list = []
        let result = this.groupBy(items, "kategori")
        //grup
        Object.keys(result).forEach((key, index) => {
            let total = result[key].reduce((n, { value }) => n + value, 0)
            list.push({ title: key, value: total, color: this.colors[index % 6] })
        });
        return list
    }
    //verilen keye göre items objeleri grupluyor.
    groupBy = function (xs, key) {
        return xs.reduce(function (rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
    };

    render() {
        const budget = {
            title: "BUDGET"
        }
        return (
            <div className=" text-gray-600 grid grid-cols-1 gap-1 mx-2 mt-32 sm:mx-0 md:mx-4  md:h-3/4 lg:mx-36 lg:w-3/4 min-w-fit">
                <div className=" text-xl md:text-2xl  float-none text-left ">
                    <div className="border-1 border-grey-200 shadow-lg rounded-md bg-white2 inline-block  h-96 p-2 ">
                        <Header title={budget.title} items={this.state.items} income={this.state.income} />
                        <Wage setIncome={this.setIncome} />
                    </div>



                </div>
                <div className="w-96 h-96">
                    <h2 className="font-bold">STATISTICS</h2>
                    <PieChart
                        data={this.calculateValues(this.state.items)}
                        lineWidth={50}
                        startAngle={10}
                        animate={true}
                        paddingAngle={4}
                        animationDuration={1000}
                        radius={30}
                        label={({ dataEntry }) => dataEntry.title}
                        labelStyle={this.labelStyle}
                        labelPosition={70}
                    />
                </div>
                <div className="p-auto col-span-4 sm:1/2 md:3/4 md:mx-1 lg:mx-2 space-y-2">
                    <div>
                        <AddSpendingForm addItems={this.addItems} createItem={this.createItem} />
                    </div>
                    <div className="">
                        <ItemList items={this.state.items} deleteItem={this.deleteItem} />
                    </div>
                </div>
            </div>
        )
    }
}


const Header = (props) => {
    let totalExpense = 0
    for (let i = 0; i < props.items.length; i++) {
        totalExpense += parseInt(props.items[i].value);
    }
    return (
        <div className="inline-block  text-left ">
            <div className="font-bold text-center"> {props.title}   </div>
            <br></br>
            <div className="italic">
                <div className="text-red-400">Expense: ${totalExpense} </div>
                <div className="text-emerald-400">Income: ${props.income}</div>
            </div>
            <div className={((props.income - totalExpense) < 0) ? 'text-[#b91c1c]' : 'text-[#047857]'}>Balance : ${props.income - totalExpense}</div>
        </div>

    )
}



const ItemList = (props) => {
    return (
        <div className=" grid grid-rows-4 gap-1 drop-shadow-md space-y-1">
            {
                props.items.map((item, index) =>
                    <div key={index} className=" grid grid-cols-5 text-start p-3 border-0 drop-shadow-sm rounded-xl  bg-white2 border-grey-100  ">
                        <div className=" text-center">{item.urun}</div>
                        <div> $ {item.value} </div>
                        <div> {item.date}</div>
                        <div>{item.kategori} </div>
                        <button onClick={() => { props.deleteItem(item) }} className="text-right" type="button" value="ekle"> <AiOutlineDelete /></button>
                    </div>
                )}

        </div>
    )
}




export default Budget;