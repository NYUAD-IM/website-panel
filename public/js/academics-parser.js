let parse = () => {
    let data = []

    let academics = document.getElementsByClassName('entry')
    let titles = document.getElementsByClassName('title')
    let programs = document.getElementsByClassName('program')
    let numbers = document.getElementsByClassName('number')
    let tracks = document.getElementsByClassName('track')
    let instructors = document.getElementsByClassName('instructors')
    let terms = document.getElementsByClassName('terms')
    let currents = document.getElementsByClassName('current')
    let years = document.getElementsByClassName('year')
    let links = document.getElementsByClassName('link')
    let desc_short = document.getElementsByClassName('desc-short')
    let desc_long = document.getElementsByClassName('desc-long')
    let cross_listings = document.getElementsByClassName('cross-listings')
    let tags = document.getElementsByClassName('tags')

    for(let i in academics){
        if(i == 'item') break
        if(i == 'length') break
        let a = {'instructors':[],'terms':[],'description':{'short':'','long':''},'cross-listed':[],'tags':[]}
        a.title = titles[i].value
        a.program = programs[i].value
        a.number = numbers[i].value
        a.track = tracks[i].value
        for(let ins of instructors[i].children)
            if(ins != instructors[i].lastChild)
                a.instructors.push(ins.value)
        for(let t of terms[i].children)
            if(t != terms[i].lastChild)
                a.terms.push(t.value)
        a.current = currents[i].value
        a.year = years[i].value
        a.link = links[i].value
        a.description.short = desc_short[i].value
        a.description.long = desc_long[i].value
        for(let c of cross_listings[i].children)
            if(c !=cross_listings[i].lastChild)
                a.cross_listings.push(c.value)
        for(let t of tags[i].children)
            if(t != tags[i].lastChild)
                a.tags.push(t.value)
        data.push(a)
    }
    send({'data':data})
}
