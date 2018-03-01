let parse = () => {
  let data = []

  let persons = document.getElementsByClassName('entry')
  let names = document.getElementsByClassName('name')
  let roles = document.getElementsByClassName('roles')
  let currents = document.getElementsByClassName('current')
  let desc_short = document.getElementsByClassName('desc-short')
  let desc_long = document.getElementsByClassName('desc-long')
  let courses = document.getElementsByClassName('courses')
  let websites = document.getElementsByClassName('website')
  let emails = document.getElementsByClassName('email')

  for(let i in persons){
    if(i == 'item') break
    let p = {'roles':[],'description':{'short':'', 'long':''}, 'courses':[]}
      p.name = names[i].value
      console.log(roles[i].children)
      for(let r of roles[i].children)
        p.roles.push(r.value)
      p.current = currents[i].value
      p.description.short = desc_short[i].value
      p.description.long = desc_long[i].value
      for(let c of courses[i].children)
        p.courses.push(c.value)
      p.website = websites[i].value
      p.email = emails[i].value
      data.push(p)
  }

  //console.log('parsed',data);
  send({'data':data})
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
    alert('failed');
  })
}

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
