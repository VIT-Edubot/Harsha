 Readme Day 8:

This contains advanced DOM manipulation techniques to dynamically add, edit, and remove employee data using JavaScript. The Employee Dashboard allows administrators to manage employee records in real time without requiring a page reload.

Here I have created three various files to complete the assignment index.html(HTML),styles.css(CSS) and employees.js(Java Script) and indulged css and js files in the html file by using href and src.The script dynamically creates employee cards when a new employee is added through the form. JavaScript is used to manipulate the DOM by generating new elements with `document.createElement()` and appending them to the employee section. When the "Edit" button is clicked, the selected employee's details are populated into the form fields, allowing modifications. The form button switches from "Add Employee" to "Update Employee" to reflect the editing mode. Upon submitting the updated details, the existing employee card is modified instead of creating a new one. Employees can also be removed by clicking the "Delete" button, which removes the card from the DOM using `removeChild()`.

Managing update mode efficiently required tracking whether a user was adding a new employee or editing an existing one, which was handled using a state flag (`editMode`). Form validation was also incorporated to prevent empty inputs, ensuring that all fields are properly filled before submission. These features create a seamless and interactive experience for administrators managing employee records.

Challenge:

Initially, the form did not distinguish between the two actions, leading to duplicate entries instead of updates. This was resolved by introducing an editMode flag and modifying the form submission behavior to update the existing employee card instead of creating a new one when in edit mode.
