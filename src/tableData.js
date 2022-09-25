export const customerTable = [
    {
        customer_id: "ALFKI",
        contact_name: "Maria Anders",
        address: "Obere Str. 57",
        postal_code: "12209",
        country: "Germany"
    },
    {
        customer_id: "ANATR",
        contact_name: "Avda. de la Constitución 2222",
        address: "Avda. de la Constitución 2222",
        postal_code: "05021",
        country: "Mexico"
    },
    {
        customer_id: "ANTON",
        contact_name: "Antonio Moreno",
        address: "Mataderos 2312",
        postal_code: "05023",
        country: "Mexico"
    },
    {
        customer_id: "BLAUS",
        contact_name: "Hanna Moos",
        address: "Forsterstr. 57",
        postal_code: "68306",
        country: "Germany"
    },
    {
        customer_id: "BLONP",
        contact_name: "Frédérique Citeaux",
        address: "24 place Kléber",
        postal_code: "67000",
        country: "France"
    },
]

export const orderDetailsTable = [
    {
        order_id: "10643",
        product_id: "28",
        unit_price: "45.60",
        quantity: "15",
        discount: "0.25"
    },
    {
        order_id: "10759",
        product_id: "32",
        unit_price: "32.00",
        quantity: "10",
        discount: "0"
    },
    {
        order_id: "10856",
        product_id: "42",
        unit_price: "14.00",
        quantity: "20",
        discount: "0"
    },
    {
        order_id: "10956",
        product_id: "21",
        unit_price: "10.00",
        quantity: "12",
        discount: "0"
    },
    {
        order_id: "10265",
        product_id: "17",
        unit_price: "31.20",
        quantity: "30",
        discount: "0"
    },
]

export const ordersTable = [
    {
        order_id: "10643",
        customer_id: "ALFKI",
        employee_id: "6",
        order_date: "1997-08-25",
        shipped_date: "1997-09-22"
    },
    {
        order_id: "10759",
        customer_id: "ANATR",
        employee_id: "3",
        order_date: "1997-11-28",
        shipped_date: "1997-12-26"
    },
    {
        order_id: "10856",
        customer_id: "ANTON",
        employee_id: "3",
        order_date: "1998-01-28",
        shipped_date: "1998-02-25"
    },
    {
        order_id: "10956",
        customer_id: "BLAUS",
        employee_id: "6",
        order_date: "1998-03-17",
        shipped_date: "1998-04-28"
    },
    {
        order_id: "10265",
        customer_id: "BLONP",
        employee_id: "2",
        order_date: "1996-07-25",
        shipped_date: "1996-08-22"
    },
]

export const availableTableData = [
    {
        name: "Customers",
        tableRef: customerTable
    },
    {
        name: "Orders",
        tableRef: ordersTable
    },
    {
        name: "OrderDetails",
        tableRef: orderDetailsTable
    }
]

export const predefinedQueries = [
    "SELECT * FROM Customers;",
    "SELECT * FROM Orders;",
    "SELECT * FROM Orderdetails;",
    "SELECT * FROM Customers WHERE customer_id = 'ALFKI';",
    "SELECT * FROM Orders WHERE order_id = 10759;",
    "SELECT * FROM Orderdetails WHERE order_id = '10856';",
    "SELECT contact_name, address FROM Customers WHERE customer_id = 'BLAUS';",
    "SELECT order_id, employee_id FROM Orders WHERE customer_id = 'ANTON';",
    "SELECT product_id, unit_price FROM OrderDetails WHERE order_id = 10759;",
    "SELECT contact_name, address, country FROM Customers WHERE customer_id = 'BLONP';",
    "SELECT customer_id, order_date, shipped_date FROM Orders WHERE order_id = '10956';",
]