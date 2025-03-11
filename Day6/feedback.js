// Function to validate form fields
function validateFields() {
    var inputs = document.querySelectorAll("#feedbackForm input, #feedbackForm select, #feedbackForm textarea");
    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        if (input.hasAttribute("required") && input.value.trim() === "") {
            alert("Error: " + input.name + " field is empty.");
            return false;
        }
    }
    return true;
}

// Function to handle form submission
function submitFeedback(event) {
    event.preventDefault(); // Prevent form from submitting

    let userName = document.getElementById("name").value.trim();
    let userEmail = document.getElementById("email").value.trim();
    let satisfaction = document.querySelector('input[name="satisfaction"]:checked');
    let feature1 = parseInt(document.getElementById("feature1").value) || 0;
    let feature2 = parseInt(document.getElementById("feature2").value) || 0;
    let feature3 = parseInt(document.getElementById("feature3").value) || 0;
    let preferredFeature = document.getElementById("feature").value;
    let comments = document.getElementById("comments").value.trim();

 
    if (userName === "") {
        alert("Error: Name field is empty.");
        return;
    }
    if (!userEmail.includes("@")) {
        alert("Error: Invalid email format.");
        return;
    }
    if (!satisfaction) {
        alert("Error: Please select satisfaction level.");
        return;
    }
    if (preferredFeature === "select") {
        alert("Error: Please select a preferred feature.");
        return;
    }

    // Validate ratings (1-5)
    let ratings = [feature1, feature2, feature3];
    for (let rating of ratings) {
        if (rating < 1 || rating > 5) {
            alert("Error: Feature ratings must be between 1 and 5.");
            return;
        }
    }


    console.log("User Name:", userName);
    console.log("User Email:", userEmail);
    console.log("Satisfied with updates:", satisfaction.value);
    console.log("Preferred Feature:", preferredFeature);
    console.log("Feature Ratings:", ratings);
    console.log("Comments:", comments || "N/A");

    // Calculate average rating
    let totalScore = feature1 + feature2 + feature3;
    let avgScore = (totalScore / 3).toFixed(2);
    console.log("Total Score:",totalScore);
    console.log("Average Score:", avgScore);
    
}

// Function to handle rating selection
function handleRatingChange() {
    var ratingInputs = document.getElementsByName("rating");
    for (var i = 0; i < ratingInputs.length; i++) {
        ratingInputs[i].addEventListener("change", function () {
            document.getElementById("ratingMessage").innerText = "Thank you for rating us: " + this.value;
        });
    }
}

// Function to reset form
function resetForm() {
    document.getElementById("feedbackForm").reset();
    document.getElementById("ratingMessage").innerText = "";
}

// Attach event listeners
document.getElementById("feedbackForm").addEventListener("submit", submitFeedback);
document.getElementById("resetBtn").addEventListener("click", resetForm);
handleRatingChange();
