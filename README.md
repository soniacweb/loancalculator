# loancalculator

# Technologies
- Bootstrap 
- JavaScript
- HTML
- CSS


# Outline

#### Adding an event listener for the submit button and passing in a `calculateResults` function.

```document.getElementById('loan-form').addEventListener('submit', calculateResults)```


#### Creating the calculateResults function

The function needed to grab all the UI elements that I needed (all of the form fields) and store them in variables. I grabbed them by selecting the IDs. An excerpt found below:

```
  const monthlyPayment = document.getElementById('monthly-payment')
  const totalPayment = document.getElementById('total-payment')
  const totalInterest = document.getElementById('total-interest')

```

To generate the calculations, I needed to create a function that could access the values from the user input and transform them into a float/decimal using the inbuilt JS method parsefloat().

```
    //calculations
  const principal = parseFloat(amount.value)
  const calculatedInterest = parseFloat(interest.value) / 100 / 12
  const calculatedPayments = parseFloat(years.value) * 12

```

NB: Since its a form submit, I needed to include the prevent default behaviour which cancels out any default behaviour when the submit events occurs.

I created an if/else statement to check if the values were finite. If true, the values would display to include two decimal points.

```
  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2)
    totalPayment.value = (monthly * calculatedPayments).toFixed(2)
    totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2) 
  } else {
    //create element for error message
    showError()
  }

```

I created a seperate function to display an error message and wanted to create the element through javaScript.



