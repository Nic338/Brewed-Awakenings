import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

const employeeOrders = (employee) => {
    let ordersFufilled = null
    for (const order of orders) {
        if (order.employeeId === employee.id)
        ordersFufilled++
    }
    return ordersFufilled
}

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target
    if (itemClicked.id.startsWith("employee")){
        const [,employeeId] = itemClicked.id.split("--")
            for (const employee of employees) {
                if (employee.id === parseInt(employeeId)) {
                    const orders = employeeOrders(employee)
                

                window.alert(`${employee.name} has sold ${orders} products`)
            }
        }   
    }
})


export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

