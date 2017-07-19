console.log('hello world');  

document.getElementById('myBtn').addEventListener("click", displayNumber);

function displayNumber() {
    document.getElementById('field1').value = Math.floor(Math.random() * 69) + 1;
    document.getElementById('field2').value = Math.floor(Math.random() * 69) + 1;
    document.getElementById('field3').value = Math.floor(Math.random() * 69) + 1;
    document.getElementById('field4').value = Math.floor(Math.random() * 69) + 1;
    document.getElementById('field5').value = Math.floor(Math.random() * 69) + 1;
    document.getElementById('field6').value = Math.floor(Math.random() * 26) + 1;
}




//A way to ensure each number is unique. Most likely a function.
//A function that attaches the event listener to the button
//A function that writes the generated number to the page (most 
//likely by assigning to the textContent property).