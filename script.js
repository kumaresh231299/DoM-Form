document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("submit").addEventListener("click", function (event) {
        event.preventDefault();

        // Get form values
        const fname = document.getElementById("first-name").value;
        const lname = document.getElementById("last-name").value;
        const address = document.getElementById("address").value;
        const pincode = document.getElementById("pincode").value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        var checkboxes = document.getElementsByClassName('food');
        //Multiple values get
        const checkedValue = [];
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                checkedValue.push(checkboxes[i].value);
            }
        }
        

        const state = document.getElementById("state").value;
        const country = document.getElementById("country").value;

            //
            if (checkedValue.length > 1) {
                myFunction(fname, lname, address, pincode, gender, checkedValue, state, country);
            } else {
                alert("check food list minimum 2 selected requried")
            }


    });
});

function myFunction(fname, lname, address, pincode, gender, checkedValue, state, country) {
    const table = document.getElementById("myTable");
    let row = table.insertRow(1);        // insertRow() method creates an empty <tr> element and adds it to a table,inserts the new row(s) at the specified index in the table.

    let cell1 = row.insertCell(0);       //insertCell() method inserts a cell into the current row.
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    let cell7 = row.insertCell(6);
    let cell8 = row.insertCell(7);

    cell1.innerHTML = `${fname}`
    cell2.innerHTML = `${lname}`
    cell3.innerHTML = `${address}`
    cell4.innerHTML = `${pincode}`
    cell5.innerHTML = `${gender}`
    cell6.innerHTML = `${checkedValue}`
    cell7.innerHTML = `${state}`
    cell8.innerHTML = `${country}`
}
