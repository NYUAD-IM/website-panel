let parse = () => {
    let data = []

    let announcements = document.getElementsByClassName('entry')
    let titles = document.getElementsByClassName('title')
    let dates = document.getElementsByClassName('date')
    let locations = document.getElementsByClassName('location')
    let descriptions = document.getElementsByClassName('desc')
    let urls = document.getElementsByClassName('url')
    let texts = document.getElementsByClassName('text')

    for(let i in announcements){
        if(i == 'item') break
        if(i == 'length') break
        let a = {}
        a.title = titles[i].value
        a.date = dates[i].value
        a.location = locations[i].value
        a.description = descriptions[i].value
        a.url = urls[i].value            // TODO: Are these done right?
        a.text = texts[i].value

        data.push(a)
    }
    send({'data':data})
}
