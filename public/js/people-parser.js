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
  let images = document.getElementsByClassName('image')

  for(let i in persons){
    //console.log(i)  // Why does this hit length?
    if(i == 'item') break
    if(i == 'length') break
    let p = {'roles':[],'description':{'short':'', 'long':''}, 'courses':[]}
      p.name = names[i].value
      for(let r of roles[i].children)
        if(r != roles[i].lastChild)  // Button is last child
          p.roles.push(r.value)
      p.current = currents[i].value
      p.description.short = desc_short[i].value
      p.description.long = desc_long[i].value
      for(let c of courses[i].children)
        if(c != courses[i].lastChild)
          p.courses.push(c.value)
      p.website = websites[i].value
      p.email = emails[i].value
      p.image = images[i].value
      data.push(p)
  }
  send({'data':data})
}
