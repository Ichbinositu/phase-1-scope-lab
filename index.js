// Declare a variable in global scope called customerName using the var keyword.

var customerName = "bob";

// Write a function that accesses that global customerName variable, and uppercases it.

function upperCaseCustomerName(){
    return customerName = customerName.toUpperCase()
}

// Write a function that when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'

var bestCustomer

function setBestCustomer(){
    return bestCustomer = 'not bob'
}

// See the consequences of declaring a variable in global scope, by writing a new function called overwriteBestCustomer() that changes that bestCustomer variable

function overwriteBestCustomer(){
    return bestCustomer = 'maybe bob'
}

// leastFavoriteCustomer and changeLeastFavoriteCustomer()
const leastFavoriteCustomer = "nani"

function changeLeastFavoriteCustomer(){
    return leastFavoriteCustomer = "yule"
}