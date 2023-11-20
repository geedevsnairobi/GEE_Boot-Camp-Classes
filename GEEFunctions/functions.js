
//Basic structure of a function

function name_of_function (parameter_1, parameter_2) {
// code to execute
// more code to execute
// …
}
 
// call the function
name_of_function(input_1, input_2);


// function to add two numbers
function calculate_Sum (num1, num2) {
var Sum = ee.Number(num1).add(ee.Number(num2)); // code that calculates the sum
    print(Sum);
}
// call the function
calculate_Sum(7, 8);



// function to calculate multiplication
function calculate_multiply (num1, num2) {
var multiply = ee.Number(num1).multiply(ee.Number(num2)); // code that calculates the sum
    print(multiply);
}
// call the function
calculate_multiply(7, 8);

// function to calculate division
function calculate_divide (num1, num2) {
var divide = ee.Number(num1).divide(ee.Number(num2)); // code that calculates the sum
    print(divide);
}
// call the function
calculate_divide(7, 8);

var x = calculate_divide(7, 8);
print(x)


// LOCAL & Global Variables

function calculate_divide (num1, num2) {
var diivide = ee.Number(num2).add(ee.Number(num2)); // code that calculates the divide_test
    print("Local variable, Sum, = ", diivide);
    return diivide; // here we use return
}
// Now call and save the output of the function.
// Save it as a variable, Sum_test.
var divide_test = calculate_divide(5, 2);
 
//function call
print("The global variable, divide_test, = ",divide_test);





///-------------INBUILT FUNCTIONS--------------

// This generates a list of numbers from 1 to 10.
var myList = ee.List.sequence(1, 10);

// The map() operation takes a function that works on each element independently
// and returns a value. You define a function that can be applied to the input.
var computeSquares = function(number) {
  // We define the operation using the EE API.
  return ee.Number(number).pow(2);
};

// Apply your function to each item in the list by using the map() function.
var squares = myList.map(computeSquares);
print(squares);  // [1, 4, 9, 16, 25, 36, 49, 64, 81]







// example of mappinga function over a colloection
var s2 = ee.ImageCollection('COPERNICUS/S2_HARMONIZED')
          .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 30))
          .filter(ee.Filter.date('2023-01-01', '2023-03-01'))
          .filter(ee.Filter.bounds(geometry))
          .median()
          .clip(geometry)
function addIndices(image) {
  var ndvi = image.normalizedDifference(['B8', 'B4']).rename('ndvi');
  var ndwi = image.normalizedDifference(['B3', 'B8']).rename('ndwi');
  return image.addBands(ndvi).addBands(ndwi);
}

// Map the function over the collection
// var data = s2.map(addIndices);
print(data)

//.clip is also a function
