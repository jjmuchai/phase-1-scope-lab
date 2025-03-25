// Write your solution in this file!
// Declare customerName in global scope
var customerName = 'bob';

// Function to uppercase customerName
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// Function to declare bestCustomer in global scope
function setBestCustomer() {
    bestCustomer = 'not bob'; 
}

// Function to overwrite bestCustomer
function overwriteBestCustomer(newCustomer) {
    bestCustomer = newCustomer;
}

// Declare a constant leastFavoriteCustomer in global scope
const leastFavoriteCustomer = 'someone annoying';

// Function to try changing leastFavoriteCustomer 
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'someone else'; // This caused an error
}