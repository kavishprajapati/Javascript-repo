/*
15. Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ delete​ ​ particular​ ​object​ 
​ from​ ​ array​ ​ and​ ​ add​ ​ new​ ​ object​ ​ at particular​ ​ position.
 Also if the position does not exist then error message should be shown to the user.
*/

function manipulateArray(option) {
    let static_array = [
        { name: "Jack", age: 23 },
        { name: "Sam", age: 12 },
        { name: "Max", age: 20 },
    ];

    if (option === "delete") {
        let delete_element_position = parseInt(
            prompt("Enter the position of element you want to delete:")
        );

        if (delete_element_position <= 0 || delete_element_position > static_array.length) {
            console.log("Invalid position! Position should be within the range of array length.");
            return;
        }

        static_array.splice(delete_element_position - 1, 1);
        console.log(static_array);
    }
    else if (option === "insert") {
        let insert_element_position = parseInt(
            prompt("Enter the position of element you want to insert:")
        );

        if (insert_element_position <= 0 || insert_element_position > static_array.length + 1) {
            console.log("Invalid position! Position should be within the range of array length + 1.");
            return;
        }

        let insert_name = prompt("Enter the name of element you want to insert:");
        let insert_age = parseInt(prompt("Enter the age of element you want to insert:"));

        static_array.splice(insert_element_position - 1, 0, { name: insert_name, age: insert_age });
        console.log(static_array);
    } else {
        console.log("Invalid option! Please choose 'delete' or 'insert'");
    }
}

manipulateArray("delete");
manipulateArray("insert");