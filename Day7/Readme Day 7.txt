Readme Day 7:

This is an employee portal for LaunchDarkly, where employee data is stored and manipulated using JavaScript arrays and objects. Each employee is represented as an object with properties such as id, name, position, department, and isActive. These objects are stored in an array, allowing easy access and modification of employee records.

Higher-order functions such as filter(), sort(), and map() are used to handle employee data efficiently. The filter() function is applied to display only active employees when the "Show Active Employees" button is clicked. The sort() function arranges employees alphabetically by name when the "Sort by Name" button is pressed. Additionally, the map() function is used in the getEmployeeNames() function to extract and display employee names in the console.

Event listeners are used to trigger updates dynamically. The "Toggle Status" button updates an employee’s active status when clicked. This is achieved using the toggleStatus() function, which finds the employee by ID, toggles their isActive property, and re-renders the employee list to reflect the changes. Similarly, event listeners on the other buttons ensure that filtering, sorting, and retrieving employee names happen in response to user actions.

One challenge encountered was ensuring that the employee list remained accurate after filtering. Since filtering modifies the original array, subsequent actions, like toggling an employee’s status, would not work as expected. This was resolved by maintaining a separate unfiltered employee array or ensuring the full list is restored before reapplying filters or sorts. 

Overall, this demonstrates the power of JavaScript arrays, objects, and higher-order functions in building dynamic and interactive web applications.

