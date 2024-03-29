// Function to display the popup
function displayPopup() {
    var popup = document.getElementById("popupContainer");
    popup.style.display = "block";
    document.body.style.overflowY = "hidden";
  }
  
  // Function to close the popup
  function closePopup() {
    var popup = document.getElementById("popupContainer");
    popup.style.display = "none";
    document.body.style.overflowY = "visible";
  }
  
  // Add event listener to the Student button
  // document.getElementById("stdB").addEventListener("click", function () {
  //   displayPopup();
  // });
  // document.getElementById("recB").addEventListener("click", function () {
  //   displayPopup();
  // });
  // document.getElementById("instB").addEventListener("click", function () {
  //   displayPopup();
  // });
  