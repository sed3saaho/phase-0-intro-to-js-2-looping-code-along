// Code your solutions in this file
// writeCards function
function writeCards(names) {
    let thankYouMessages = [];
    for (let name of names) {
      thankYouMessages.push(`Thank you, ${name}, for the wonderful gift!`);
    }
    return thankYouMessages;
  }
  
  // countDown function
  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }
  
  // Test the functions
  const names = ["Alice", "Bob", "Charlie"];
  const thankYouMessages = writeCards(names);
  console.log(thankYouMessages);
  
  countDown(5);