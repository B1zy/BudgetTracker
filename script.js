// Set today's date as default
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('date').valueAsDate = new Date();
    
    // Handle form submission
    document.getElementById('transaction-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const amount = document.getElementById('amount').value;
        const date = document.getElementById('date').value;
        
        // Add transaction to table
        addTransactionToTable(name, amount, date);
        
        // Clear form
        document.getElementById('name').value = '';
        document.getElementById('amount').value = '';
        document.getElementById('date').valueAsDate = new Date();
    });
});

function addTransactionToTable(name, amount, date) {
    const tableBody = document.getElementById('transactions-body');
    const newRow = tableBody.insertRow();
    
    const nameCell = newRow.insertCell(0);
    const amountCell = newRow.insertCell(1);
    const dateCell = newRow.insertCell(2);
    
    nameCell.textContent = name;
    amountCell.textContent = parseFloat(amount).toFixed(2);
    
    // Format the date nicely
    const formattedDate = new Date(date).toLocaleDateString();
    dateCell.textContent = formattedDate;
}