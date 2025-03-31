let editMode = false;
let currentCard = null;
// Function to create an employee card dynamically
        function createEmployeeCard(name, position, department) {
            const card = document.createElement('div');
            card.className = 'employee-card';
            card.innerHTML = `
                <p class="emp-name">Name: ${name}</p>
                <p class="emp-position">Position: ${position}</p>
                <p class="emp-department">Department: ${department}</p>
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            `;
            return card;
        }
// Function to handle editing an employee card
        function handleEdit(card, name, position, department) {
            // Populate the form fields with existing employee data
            document.getElementById('name').value = name;
            document.getElementById('position').value = position;
            document.getElementById('department').value = department;
            document.getElementById('submitButton').textContent = "Update Employee";
            editMode = true;
            currentCard = card;
        }
 // Function to delete an employee card

        function handleDelete(card) {
            document.getElementById('employeeSection').removeChild(card);
        }
// Form submission handler
        document.getElementById('employeeForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value.trim();
            const position = document.getElementById('position').value.trim();
            const department = document.getElementById('department').value.trim();
            const employeeSection = document.getElementById('employeeSection');

            
// Validate fields before proceeding           
            if (!validateFields(name, position, department)){
                return;
            }
            
            if (editMode) {
                // Update the existing card with new values
                currentCard.querySelector('.emp-name').textContent = `Name: ${name}`;
                currentCard.querySelector('.emp-position').textContent = `Position: ${position}`;
                currentCard.querySelector('.emp-department').textContent = `Department: ${department}`;

                // Reset button text and editing state
                document.getElementById('submitButton').textContent = "Add Employee";
                editMode = false;
                currentCard = null;
            }
            else {
                //New employee card

                const card = createEmployeeCard(name, position, department);
                
                // Add event listener for editing
                card.querySelector('.edit').addEventListener('click', function() {
                    handleEdit(card, name, position, department);
                }
            );
                // Add event listener for deleting
                card.querySelector('.delete').addEventListener('click', function() {
                    handleDelete(card);
                }
            );
                
                employeeSection.appendChild(card);
            }
             // Reset form after submission
            document.getElementById('employeeForm').reset();
        }
        
    );
    
// Function to validate input fields
    function validateFields(name, position, department) {
        if (!name) {
            alert("Name field is required!");
            return false;
        }
        if (!position) {
            alert("Position field is required!");
            return false;
        }
        if (!department) {
            alert("Department field is required!");
            return false;
        }

        return true;

        
    }
    
