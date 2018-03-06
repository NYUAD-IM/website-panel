let parse = () => {
    let data = []

    let workshops = document.getElementsByClassName('entry')
    let titles = document.getElementsByClassName('title')
    let instructors = document.getElementsByClassName('instructor')
    let humanDates = document.getElementsByClassName('human')
    let machineDates = document.getElementsByClassName('machine')
    let locations = document.getElementsByClassName('location')
    let descriptions = document.getElementsByClassName('desc')
    let tags = document.getElementsByClassName('tags')
    let urls = document.getElementsByClassName('url')
    let texts = document.getElementsByClassName('text')

    for(let i in workshops){
        if(i == 'item') break
        if(i == 'length') break
        let w = {'date':{'human':'','machine':''},'tags':[],'links':{'url':'','text':''}}
        w.title = titles[i].value
        w.instructor = instructors[i].value
        w.date.human = humanDates[i].value
        w.date.machine = machineDates[i].value
        w.location = locations[i].value
        w.description = descriptions[i].value
        listParse(w, w.tags, tags[i])
        w.links.url = urls[i].value
        w.links.text = texts[i].value

        data.push(w)
    }
    send({'data':data})
}
