let parse = () => {
    let data = []
    let title = document.getElementById('category')
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

    for (let i in persons) {
        if (i == 'item') break
        if (i == 'length') break
        let p = {'roles':[],'description':{'short':'','long':''},'courses':[]}
        p.name = names[i].value
        listParse(p, p.roles, roles[i])
        p.current = currents[i].value
        p.description.short = desc_short[i].value
        p.description.long = desc_long[i].value
        listParse(p, p.courses, courses[i])
        p.website = websites[i].value
        p.email = emails[i].value
        p.image = images[i].value

        data.push(p)
    }
    send({'data':data, 'title':title.innerText})
}
