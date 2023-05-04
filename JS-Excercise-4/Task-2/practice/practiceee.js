// Initialize an empty array to store table data
let tableData = [];
let static_data = [
    {
        firstName: "Kavish",
        lastName: "Prajapati"
    },

    {
        firstName: "Arham",
        lastName: "Naik"
    },

    {
        firstName: "chgcc",
        lastName: "ljbbln"
    },

    {
        firstName: "xtdj",
        lastName: "vhctxt"
    },

    {
        firstName: "ywerty",
        lastName: "oiuytr"
    },

    {
        firstName: "sdf",
        lastName: "okmnb"
    },

    {
        firstName: "gfcv",
        lastName: "asdfgn"
    },

    {
        firstName: "okmnbvc",
        lastName: "asdf"
    }
]
// This will get data to tableData array
function addData() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;

    if (firstName && lastName) {
        // This will check if the data already exists in tableData array
        const existingData = tableData.find(data => data.firstName === firstName && data.lastName === lastName);

        if (existingData) {
            alert("Data already exists in table");
        } else {
            // data added to tableData array
            tableData.push({
                firstName: firstName,
                lastName: lastName
            });
            // This will clear data from input field
            document.getElementById("firstName").value = "";
            document.getElementById("lastName").value = "";
            
            updateTable();
        }
    } else {
        alert("Please enter both fields");
    }
}


// Function to update table
function updateTable() {
    let html = "";
    // Loop through tableData array to create table rows
    tableData.forEach((data, index) => {
        html += "<tr>";
        html += "<td>" + data.firstName + "</td>";
        html += "<td>" + data.lastName + "</td>";
        html += "<td><button type='button' class='btn btn-primary' onclick='editData(" + index + ")'>Edit</button>&nbsp;<button type='button' class='btn btn-danger' onclick='deleteData(" + index + ")'>Delete</button></td>";
        html += "</tr>";
    });
    // Update table with new rows
    document.getElementById("tableData").innerHTML = html;
}


// Function to delete row from tableData array
function deleteData(index) {
    if (confirm("Are you sure you want to delete this data?")) {
        tableData.splice(index, 1);
        
        updateTable();
    }
}


// Function to edit 
function editData(index) {
    // Retrieve existing data from tableData array
    const existingData = tableData[index];
    const firstName = existingData.firstName;
    const lastName = existingData.lastName;

    // Pre-fill input fields with existing data
    document.getElementById("firstName").value = firstName;
    document.getElementById("lastName").value = lastName;

    // Replace data in tableData array with updated values
    const updateButtonHandler = function () {
        tableData[index].firstName = document.getElementById("firstName").value;
        tableData[index].lastName = document.getElementById("lastName").value;
        // Clear input fields
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        // Remove update and cancel buttons
        document.getElementById("updateData").remove();
        document.getElementById("cancelEdit").remove();
        // Add Add button back
        document.getElementById("btnadd").style.display = "block";
        // Call function to update table
        updateTable();
    };


    // Add update button to form
    const updateButton = document.createElement("button");
    updateButton.setAttribute("type", "button");
    updateButton.setAttribute("class", "btn btn-primary");
    updateButton.setAttribute("id", "updateData");
    updateButton.innerHTML = "Update";
    updateButton.addEventListener("click", updateButtonHandler);
    document.querySelector("form").appendChild(updateButton);


    // Add cancel button to form
    const cancelButton = document.createElement("button");
    cancelButton.setAttribute("type", "button");
    cancelButton.setAttribute("class", "btn btn-secondary");
    cancelButton.setAttribute("id", "cancelEdit");
    cancelButton.innerHTML = "Cancel";
    cancelButton.addEventListener("click", function () {

        // Clear input fields
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        
        // Remove update and cancel buttons
        document.getElementById("updateData").remove();
        document.getElementById("cancelEdit").remove();

        // Add button back
        document.getElementById("btnadd").style.display = "block";
    });
    document.querySelector("form").appendChild(cancelButton);

    // Hide Add button
    document.getElementById("btnadd").style.display = "none";
}

// function for Rendering a data.




function renData() {

    static_data.forEach(function(data){
        tableData.push(data)
    })
    updateTable();
}


function check(){
    let m = document.getElementById('mark');
    let s = document.getElementById('selectall');

    if ( s.checked == true ){
        for(i=0; i<tableData.length; i++){
            m.checked = true;
        }
    }
}

function selectalldel(){
    // let m = document.getElementById();
    let s = document.getElementById('selectall');

    if (s.checked == true){
        tableData = [];
    }

    updateTable();
}