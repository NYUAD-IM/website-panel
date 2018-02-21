
function save() {

    let input = document.getElementsByClassName('activities-holder')
    let output = []

    for (let i = 0; i < input.length; i++) {
        let obj = {};
        obj.title = input[i].children[0].value
        obj.blurb = input[i].children[1].value
        obj.image = input[i].children[2].value
        obj.link = input[i].children[3].value
        output.push(obj)
    }
    console.log(output)

    // $.ajax({
    //     url: "../../index.js",
    //     type: "POST",
    //     data: JSON.stringify(output),
    //     contentType: "application/json",
    //     complete: submitted()
    // })
}

// Callback
function submitted() {
    console.log("Data sent to index.js")
    alert("Data sent to index.js")
}




// Read all fields in,
// Formatting each pug file to output a template object in one <div>,
// where the children within are <inputs>

// Save() reads input fields from client, accessed via the div class.

// Formats fields as JSON:
/*    - loop each div class, pushing the relvant

*/
//   - Returns new JSON file
