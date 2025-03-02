## Updates and Enhancements

I have added a feature rating option in the HTML form, allowing users to rate different features on a scale of 1 to 5. This addition provides more detailed feedback on the user's preferences and helps in improving specific features. Additionally,  changed the Yes/No satisfaction selection into radio buttons to improve usability and ensure a structured input format.

##used variables, operators, and debugging
This project is a simple and interactive user feedback form built using HTML, CSS, and JavaScript. The form allows users to submit their feedback, including their satisfaction level, preferred feature, and ratings for different features. It also includes validation checks to ensure correct data input before submission.

In the JavaScript file, we utilized variables to store user input, including name, email, satisfaction status, preferred feature, and feature ratings. We used `let` and `var` to declare variables such as `userName`, `userEmail`, and `isSatisfied`. Operators were applied to perform calculations, such as summing up feature ratings and calculating the average score. Debugging was achieved using `console.log()` statements to track user input and validation steps, ensuring smooth execution.

## Validation and Error Handling

To improve user experience and data accuracy, i implemented multiple validation checks. Firstly, ensured that the name field is not empty. Then, verified that the email contains an `@` symbol to validate format and also checked if the user selected a satisfaction option. Additionally, we restricted feature ratings to a range between 1 and 5. Finally, we ensured that a preferred feature was selected from the dropdown list. If no additional comments were provided,  logged "Nill" to indicate the absence of feedback.

If any validation failed, an error message was displayed using `alert()`, preventing form submission until all fields were correctly filled.

## Challenges and Solutions

One challenge faced was handling invalid inputs for feature ratings, as empty fields or non-numeric values caused issues. This was resolved by using `parseInt()` with a fallback to `0` if the input was empty. Additionally, ensuring the satisfaction radio button was checked required careful handling with `querySelector()`. Debugging with `console.log()` helped identify and fix these issues efficiently.

