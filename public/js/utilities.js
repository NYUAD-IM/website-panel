let add = (field) => {
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

let send = (_data) => {
  $.ajax({
    url:'http://localhost:5000/save/' + document.getElementById('category').innerText,
    method: 'POST',
    data: _data,
    dataType: 'json'
  }).done(()=>{
    alert('saved')
  }).fail(()=>{
    console.log("failed")
    //alert('failed');                      Switch this back once working
  })
}
