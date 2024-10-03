//input to show
let randomPassword = document.getElementById("random-password")
// creation of Arrays needed
let numbArray = [1,2,3,4,5,6,7,8,9,0]
let lowerkeyArrayOne = ["a", "b", "c","d", "e","f","g","h","i","j", "k", "l","m","o","p", "q","r","s","t", "u", "w","y","z"]
let upperkeyArrayOne = ["A", "B", "C","D", "E","F","G","H","I","J", "K", "L","M","O","P", "Q","R","S","T", "U", "W","Y","Z"]
let keyArray = ["!","$","%","@","#"]

// Function to pick a random element and remove it from the array to ensure uniqueness
function getRandomElementAndRemove(array) {
    let index = Math.floor(Math.random() * array.length);
    let element = array[index];
    array.splice(index, 1); // Remove the element from the array to avoid repetition
    return element;
}

// Function to generate the password
function generateBtn() {
    // Clone the arrays to avoid altering the original arrays
    let tempNumbArray = [...numbArray];
    let tempLowerkeyArrayOne = [...lowerkeyArrayOne];
    let tempUpperkeyArrayOne = [...upperkeyArrayOne];
    let tempKeyArray = [...keyArray];

    // Pick unique elements from each array
    let newNumbRandom = getRandomElementAndRemove(tempNumbArray);
    let newLowerkeyOne = getRandomElementAndRemove(tempLowerkeyArrayOne);
    let newUpperKeyOne = getRandomElementAndRemove(tempUpperkeyArrayOne);
    let newKey = getRandomElementAndRemove(tempKeyArray);

    // Add more elements if needed
    let newLowerkeyTwo = getRandomElementAndRemove(tempLowerkeyArrayOne);
    let newUpperKeyTwo = getRandomElementAndRemove(tempUpperkeyArrayOne);

    // Combine the selected elements
    let newTotalArray = [newNumbRandom, newLowerkeyOne, newUpperKeyOne, newKey, newLowerkeyTwo, newUpperKeyTwo];

    // Shuffle the array to randomize the order of characters
    newTotalArray = newTotalArray.sort(() => Math.random() - 0.5);

    // Output the password by joining the array elements into a string
    randomPassword.value = newTotalArray.join('');
}





function copyBtn(){
    let passwordValue = randomPassword.value

    if (passwordValue) {
        navigator.clipboard.writeText(passwordValue).then(function() {
            // Success message
            console.log('Password copied to clipboard: ' + passwordValue); 
        }, function(err) {
            // Error handling
            console.error('Error in copying text: ', err); 
        });
    } else {
         // In case the field is empty
        alert('No password to copy');
    }
}