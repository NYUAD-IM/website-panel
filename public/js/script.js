// Temp script while building pug files, to be replaced by individual scripts
// TODO: Replace with individual scripts

let add = (field) => {
  console.log(field)
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
