# loancalculator

A simple loan calculator app to calculate repayment taking into consideration the interest, amount borrowed, and year/s for repayment.

Demo can be found <a href='https://soniacweb.github.io/loancalculator/'>here</a>

<img src='https://i.imgur.com/4EfDnXP.png' alt='screenshot of app' style='width:700px'> 


# Technologies
- Bootstrap 
- JavaScript
- HTML
- CSS


# Outline

I wanted to start by adding in an event listener for the submit button and passing in an anonymous function which includes showing valid results and removing the spinner once the results have been rendered. I used the setTimeout method to time the calculations after a one second delay.

```document.getElementById('loan-form').addEventListener('submit', function() {
   // hide results despite already being hidden by default
  document.getElementById('results').style.display = 'none'
   
  // show the loader as soon as it's clicked
  document.getElementById('loading').style.display = 'block'

  setTimeout(calculateResults, 1000)
})```

NB: Since its a form submit, I needed to include the prevent default behaviour which cancels out any default behaviour when the submit events occur.


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


I simple if/else statement was used to check if the values were finite. If true, the values would render to include two decimal points. I identified the results and loading ID respectively to add results and to remove the spinner if the condition was met.

```
  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2)
    totalPayment.value = (monthly * calculatedPayments).toFixed(2)
    totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2) 

       //show results
    document.getElementById('results').style.display = 'block'

    //also hide the spiner 
    document.getElementById('loading').style.display = 'none'

  } else {
    //create element for error message
    showError('Please check your numbers')
  }

```

I created a seperate `showError` function to display an error message and wanted to create the ui through javaScript.

I created the alert using Bootstrap class syntax: a class name of 'alert' and the colour 'danger'. I added the text by creating a text node and appended this to the div. I then used JavaSctipt's inbuilt `insertBefore` method to situation the error alert above the heading- it takes in two parameters- the element you wish to show and the element you wish to render it before.

`
//create a div
  const errorDiv = document.createElement('div')

`
```
//add class of alert 
  errorDiv.className = 'alert alert-danger'
  //create text node and append to div
  errorDiv.appendChild(document.createTextNode(error))

  //insert error above heading
  card.insertBefore(errorDiv, heading)
```

For a good UI experience, I added in a setTimeout function to remove the alert after two second:

```
setTimeout(clearError, 2000)
```

The follow up function identifies the element through the class name and removes the element using JavaScript's `remove` method:

```
function clearError() {
  document.querySelector('.alert').remove()
}
```

I removed the loading image and results feature using CSS' `display: none` property and used JavaScript to display them after being triggered by events.

```
#loading, #results {
  display: none;
}

```

