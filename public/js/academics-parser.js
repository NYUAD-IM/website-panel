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
    let crosslistings = document.getElementsByClassName('crosslisted')
    let tags = document.getElementsByClassName('tags')

    for(let i in academics){
        if(i == 'item') break
        if(i == 'length') break
        let a = {'instructors':[],'terms':[],'description':{'short':'','long':''},'crosslisted':[],'tags':[]}
        a.title = titles[i].value
        a.program = programs[i].value
        a.number = numbers[i].value
        a.track = tracks[i].value
        listParse(a, a.instructors, instructors[i])
        listParse(a, a.terms, terms[i])
        a.current = currents[i].checked
        a.year = years[i].value
        a.link = links[i].value
        a.description.short = desc_short[i].value
        a.description.long = desc_long[i].value
        listParse(a, a.crosslisted, crosslistings[i])
        listParse(a, a.tags, tags[i])
        data.push(a)
    }
    send({'data':data})
}
