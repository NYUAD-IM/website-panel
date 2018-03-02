let parse = () => {
    let data = []

    let activities = document.getElementsByClassName('entry')
    let titles = document.getElementsByClassName('title')
    let blurbs = document.getElementsByClassName('blurb')
    let images = document.getElementsByClassName('image')
    let links = document.getElementsByClassName('link')

    for(let i in activities){
        if(i == 'item') break
        if(i == 'length') break
        let a = {}
        a.title = titles[i].value
        a.blurb = blurbs[i].value
        a.image = images[i].value
        a.link = links[i].value

        data.push(a)
    }
    send({'data':data})
}
