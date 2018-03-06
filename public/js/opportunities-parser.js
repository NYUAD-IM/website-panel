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
        let o = {'category':{'main':'','sub':[]},'connection':{'name':'','contact':'','relationship':''}}
        o.title = titles[i].value
        o.category.main = mains[i].value
        listParse(o, o.category.sub, subs[i])
        o.location = locations[i].value
        o.link = links[i].value
        o.deadline = deadlines[i].value
        o.description = descriptions[i].value
        o.connection.name = names[i].value
        o.connection.contact = contacts[i].value
        o.connection.relationship = relationships[i].value

        data.push(o);
    }
    send({'data':data})
}
