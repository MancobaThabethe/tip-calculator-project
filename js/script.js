// Variables

let totalBill = 0
let tip = 0
let people = 1

// DOM Elements
const billTotal = document.querySelector('#billTotal')
const tipEl = document.querySelector('#tip')
const peopleEl = document.querySelector('.people-counter')
const totalAll = document.querySelector('#total')

// Bill Calculator
const totalPperson = (total, tip, people)=> {
    
    let totalTip = total * (tip/100)
    totalTip.toFixed(2)

    if(tip === 0 && people === 1)
    {
        totalAll.textContent = `R${total.toFixed(2)}`
    }
    else if(tip > 0 && people < 2)
    {
        totalAll.textContent = `R${(total + totalTip).toFixed(2)}`
    }
    else
    {
        totalAll.textContent = `R${((total + totalTip)/people).toFixed(2)}`
    }

}

// Bill Total
billTotal.onkeyup = ()=>{
    if(billTotal.value > 0 && tip === 0 && people === 1){
        totalBill = Number(billTotal.value)
        totalPperson(totalBill, 0, 1)
    }
    else if(billTotal.value > 0 && tip > 0 && people === 1)
    {
        totalBill = Number(billTotal.value)
        totalPperson(totalBill, tip, 1)
    }
    else
    {
        totalBill = Number(billTotal.value)
        totalPperson(totalBill, tip, people)
    }
}

// Tip Function
tipEl.onkeyup = ()=>{
    if(tipEl.value > -1 && people === 1){
        tip = tipEl.value
        totalPperson(totalBill, tip, 1)
    }
    else if(tipEl.value > -1 && people > 1)
    {
        tip = tipEl.value
        totalPperson(totalBill, tip, people)
    }
    else
    {
        tip = 0
        totalPperson(totalBill, 0, people)
    }
}

// People Buttons
const buttons = document.querySelectorAll('button')

// Decrease People
buttons[0].onclick = ()=>{
    if(people > 1)
    {
        people--
        peopleEl.textContent = people
        totalPperson(totalBill, tip, people)
    }
}

// Increase People
buttons[1].onclick = ()=>{
    people++
    peopleEl.textContent = people
    totalPperson(totalBill, tip, people)
}

