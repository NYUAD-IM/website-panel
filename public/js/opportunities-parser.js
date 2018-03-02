let parse = () => {
    let data = []

    let opportunities = document.getElementsByClassName('entry')
    let titles = document.getElementsByClassName('title')
    let mains = document.getElementsByClassName('main')
    let subs = document.getElementsByClassName('sub')
    let locations = document.getElementsByClassName('location')
    let links = document.getElementsByClassName('link')
    let deadlines = document.getElementsByClassName('deadline')
    let descriptions = document.getElementsByClassName('desc')
    let names = document.getElementsByClassName('name')
    let contacts = document.getElementsByClassName('contact')
    let relationships = document.getElementsByClassName('relationship')

    for(let i in opportunities){
        if(i == 'item') break
        if(i == 'length') break
        let o = {'category':{'main':'','sub':[]}}
        o.title = opportunities[i].value
        o.category.main = mains[i].value
        for(let s of subs[i].children)
            if(s != subs[i].lastChild)
                o.category.sub.push(s.value) // TODO: Is this array accessible on the other side?
        o.location = locations[i].value
        o.link = links[i].value
        o.deadline = deadlines[i].value
        o.description = descriptions[i].value
        o.name = names[i].value
        o.contact = contacts[i].value
        o.relationship = relationships[i].value

        data.push(o);
    }
    send({'data':data})
}
