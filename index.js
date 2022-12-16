const copy = () => {
    // Get the text field
    var copyText = document.getElementById("referLink").innerText;

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText);
  
    // Alert the copied text
    alert("Copied the text: " + copyText);
  }