//listen for submit 

document.getElementById('loan-form').addEventListener('submit', calculateResults)

//calculate results - need to pass in an event parameter
 
function calculateResults(e) {
  //UI variables
  const amount = document.getElementById('amount')
  const interest = document.getElementById('interest')
  const years = document.getElementById('years')
  const monthlyPayment = document.getElementById('monthly-payment')
  const totalPayment = document.getElementById('total-payment')
  const totalInterest = document.getElementById('total-interest')

  //calculations
  const principal = parseFloat(amount.value)
  const calculatedInterest = parseFloat(interest.value) / 100 / 12
  const calculatedPayments = parseFloat(years.value) * 12

  //compute the monthly payments 
  const x = Math.pow(1 + calculatedInterest, calculatedPayments)
  const monthly = (principal * x * calculatedInterest) / (x - 1) 

  //checking to see if its finite
  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2)
    totalPayment.value = (monthly * calculatedPayments).toFixed(2)
    totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2) 
  } else {
    //create element for error message
    showError('Please check your numbers')
  }

  e.preventDefault()
}


function showError(error) {
  //create a div
  const errorDiv = document.createElement('div')

  //elements
  const card = document.querySelector('.card')
  const heading = document.querySelector('.heading')

  //add class of alert 
  errorDiv.className = 'alert alert-danger'
  //create text node and append to div
  errorDiv.appendChild(document.createTextNode(error))

  //insert error above heading
  card.insertBefore(errorDiv, heading)

  // clear error after 3 seconds
  setTimeout(clearError, 2000)
}

function clearError() {
  document.querySelector('.alert').remove()
}