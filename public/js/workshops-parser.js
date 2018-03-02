let parse = () => {
    let data = []

    let workshops = document.getElementsByClassName('entry')
    let titles = document.getElementsByClassName('title')
    let instructors = document.getElementsByClassName('instructor')
    let humanDates = document.getElementsByClassName('human')
    let machineDates = document.getElementsByClassName('machine')
    let locations = document.getElementsByClassName('location')
    let descriptions = document.getElementsByClassName('description')
    let tags = document.getElementsByClassName('tags')
    let urls = document.getElementsByClassName('url')
    let texts = document.getElementsByClassName('text')

    for(let w in workshops){
        
    }
    send({'data':data})
}
