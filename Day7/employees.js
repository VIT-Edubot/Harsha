//Array of employess
let employees = [
    { id: 1, name: "Harsha", position: "Software Engineer", department: "Engineering", isActive: true },
    { id: 2, name: "Vardhan", position: "Product Manager", department: "Product", isActive: false },
    { id: 3, name: "Narayana", position: "UX Designer", department: "Design", isActive: true },
    { id: 4, name: "David", position: "HR Specialist", department: "Human Resources", isActive: true },
    {id:  5,name:"Bhuvi",position:"Tester",department:"Engineering",isActive:true},
    {id:  6,name:"Shami",position:"Marketing team",department:"Product",isActive:false}
];

// Function to render employees to the DOM
function renderEmployees() {
    let employeeList = document.getElementById("employee-list");
    employeeList.innerHTML = "";

    employees.forEach(emp => {
        let employeeDiv = document.createElement("div");
        employeeDiv.classList.add("employee");
        employeeDiv.innerHTML = `
            <p class='emp'><strong>${emp.name}</strong> - ${emp.position} (${emp.department})</p>
            <p>Status: <span class="status">${emp.isActive ? "Active" : "Inactive"}</span></p>
            <button onclick="toggleStatus(${emp.id})" class="tog">Toggle Status</button>
        `;
        employeeList.appendChild(employeeDiv);
    });
}

// Function to toggle employee status
function toggleStatus(id) {
    let employee = employees.find(emp => emp.id === id);
    if (employee) {
        employee.isActive = !employee.isActive;
        renderEmployees();
    }
}

// Function to get employee names
function getEmployeeNames() {
    let names = employees.map(emp => emp.name);
    console.log("Employee Names:", names);
}

// Initial render
renderEmployees();

document.getElementById("filter-active").addEventListener("click", () => {
    employees = employees.filter(emp => emp.isActive);
    renderEmployees();
});

document.getElementById("sort-name").addEventListener("click", () => {
    employees.sort((a, b) => a.name.localeCompare(b.name));
    renderEmployees();
});

document.getElementById("get-names").addEventListener("click", getEmployeeNames);


