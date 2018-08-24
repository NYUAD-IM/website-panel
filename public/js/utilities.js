let addField = (field) => {
  //console.log(field)
  let btn = field.lastChild
  let newIn = document.createElement('input')
  if (btn.previousSibling == null || btn.previousSibling.value.length != 0) {
    // Create new input field, give it a class:
    newIn.className += "entry-field"
    // Add the new input, keeping the button at the bottom:
    field.removeChild(btn)
    field.appendChild(newIn)
    field.appendChild(btn)
  }
}

let addEntry = (node) => {
    // The node of the button is passed in. Clone the previous entry:
    var clone = node.previousSibling.cloneNode(true)
    var btnClone = node.cloneNode(true)
    // Access the HTMLCollection of .entry-field elements:
    var fields = clone.getElementsByClassName('entry-field')
    // Set them to blank:
    for (let i of fields) {
        i.value = ''
    }
    // Add the new entry after the br:
    node.nextSibling.insertAdjacentElement('afterend', clone)
    // Add a new button and br after the entry:
    node.nextSibling.nextSibling.insertAdjacentElement('afterend', btnClone)
    node.nextSibling.nextSibling.nextSibling.insertAdjacentHTML('afterend', '<br>');
}

let removeEntry = (entry) => {
    // The trick: DOM elements have to be removed via parent elements.
    // First remove the <br> following this <div>, then the <div> itself:
    let e = entry.children[2].value
    let r = confirm('remove "' + e + '"?')
    if (r == true) {
      entry.parentNode.removeChild(entry.nextSibling)
      entry.parentNode.removeChild(entry)
    }
}

// Used when saving a page by the parse function of each Pug page's; [page]-parser.js
// Responsible for removing blanks in multi-input sections of each page,
// e.g. "instructors", "sub-categories", "roles", etc.
let listParse = (obj, populate, list) => {
    // 'populate' is the array to be populated, passed as obj.populate, e.g. person.tags
    for(var x of list.children) {
        // Check that we are working with <input> elements:
        if(x.nodeName === "INPUT") {
            // Push the child input field if not blank:
            if(x.value !== "") {
                populate.push(x.value)
            }
            // If the input IS blank, skip it:
            if(x.value === "") {
                //console.log("Empty, skipped: ")
                //console.log(x.value)
            }
            // If the input is blank AND this array is empty, add a blank slot:
            if(x.value === "" && populate.length == 0) {
                populate.push("")
            }
        }
    }
}

let send = (_data) => {
  $.ajax({
    // url: 'http://localhost:5000/save/' + document.getElementById('category').innerText,
    url: 'https://imheroku.herokuapp.com/save/' + document.getElementById('category').innerText,
    method: 'POST',
    data: _data,
    dataType: 'json'
  }).done((data)=>{
    alert(data.message)
  }).fail((data)=>{
    alert('saved did not work... failed\n'+data.error)
  })
}
