// Declare and Use Variables
var userName = "";
let userEmail = "";
var isSatisfied = false; 
function calculateScore(feature1, feature2, feature3) {
    let totalScore = feature1 + feature2 + feature3;
    let averageScore = (totalScore / 3).toFixed(2);
    console.log("Total Score:", totalScore);
    console.log("Average Score:", averageScore);

    
}
// Form Validation Function
function validateForm(event) {
    event.preventDefault(); // Prevent form submission
    userName = document.getElementById("name").value.trim();
    userEmail = document.getElementById("email").value.trim();
    var satisfaction= document.querySelector('input[name="satisfaction"]:checked');
    let feature1 = parseInt(document.getElementById("feature1").value) || 0;
    let feature2 = parseInt(document.getElementById("feature2").value) || 0;
    let feature3 = parseInt(document.getElementById("feature3").value) || 0;
    let preferredFeature = document.getElementById("feature").value; // Get dropdown selection
    let comments = document.getElementById("comments").value.trim();

    // Check if name is empty
    if (userName === "" ) {
        alert("Error: Name field is empty.");
        return;
    }
    // Validate email format
    if (!userEmail.includes("@")) {
        alert("Error: Invalid email format.");
        return;
    }

    // Check if satisfaction is selected
    if (!satisfaction) {
        alert("Error: Satisfaction option not selected.");
        return;
    }

    // Validate feature ratings (must be between 1 and 5)
    if (
        feature1 < 1 || feature1 > 5 ||
        feature2 < 1 || feature2 > 5 ||
        feature3 < 1 || feature3 > 5
    ) {
        alert("Error: Feature ratings must be between 1 and 5.");
        return;
    }
    // Validate preferred feature selection
    if (preferredFeature === "select") {
        alert("Error: Please select a preferred feature.");
        return;
    }
    console.log("User Name:", userName);
    console.log("User Email:", userEmail);
    console.log("Satisfied with updates:", satisfaction.value);
    console.log("Preferred Feature:", preferredFeature);
    // Calculate and display score
    calculateScore(feature1, feature2, feature3);
    if(comments === ""){
      console.log("Comments: Nill ");
    }
    else{
      console.log("Comments:", comments);
    }

}

// Attach event listener to form
document.getElementById("feedbackForm").addEventListener("submit", validateForm);
