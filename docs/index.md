---
layout: default
title:  "NYUADIM - Docs"
date:   2018-02-10 17:42:20 +0400
categories: data convention
---

# NYUAD IM Documentation

Hey there. This is an up-to-date documentation of how the NYUAD IM website works. The repo for the website is [here](https://github.com/NYUAD-IM/website) and our DIY content management systsem (modestly named *panel*) is [here](https://github.com/NYUAD-IN/website-panel)

### Table of Contents
- [Data Structures](#data-structures)
- [Panel Scripts](#panel-scripts)
- [Website Scripts](#website-scripts)
- [Website Style](#website-style)

---

## Data Structures

### Academics
This represents all of the classes displayed on `/academics`, whether IM requirements, electives or non-IM classes.
- `title` [`string`] :  the title of the class. if the title is `Introduction to Interactive Media`, `Communications Lab` or `Communication and Technology`, the field `Minor/Major requirement` will be appended on the webpage. If the title is `Capstone Seminar` or `Capstone Project`, the field `Major requirement` will be appended on the webpage (i.e. the title of these specific classes matter!).
- `number` [`string`] : the course numer according to the NYUAD bulleting, including the department prefix.
- `program` [`string`] : the program who offers that class (IM, VisArts, etc. The exact spelling shouldn't matter for now).
- `instructors` [`array of strings`] :  names of the instructors who are offering that class. exact spelling doesn't matter.
- `track` [`string`] : the tracks mentioned in the major proposal. Possible values are: `Computational Media`, `Physical Computing`, `Media & Design Thinking`, `Foundation`.
- `term` [`arrays of strings`] : the term during which it is offered. Possible values are: `FALL`, `JANUARY`, `SPRING`, `JUNE`.
- `year` [`number`] : the year the class was last offered.
- `currently_offered` [`boolean`] : whether the class is, well, currently offered.
- `link` [`string`] :  should be a valid URL pointing to the class website. If there is no class website, leave the string empty (`""`).
- `description.short` [`string`] : a one-line, half-page display.
- `description.long` [`string`] : a more extensive description revealed on click.
- `cross-listed` [`array of strings`] : the departments with which the class is crosslisted. Possible values are the names of the departments or `[] (empty array)` for a class that is not cross-listed.
- `tags` [`array of strings`] : points to `/gallery` and display projects based on that tag. The exact spelling of these tags is up to Miha.

#### Example
```json
{
	"title": "Communications Lab",
	"number": "IM-UH 1011",
	"program":"Interactive Media",
	"track": "Foundation",
	"instructors": ["Craig Protzel", "Pierre Depaz"],
	"terms":["FALL", "SPRING"],
	"year": 2017,
	"currently_offered": true,
	"link":"http://commlab.nyuad.im",
	"description":{
		"short": "intro to multimedia storytelling",
		"long": "very long intro"
		},
	"cross-listed": ["Computer Science", "Psychology"],
	"tags": ["commlab"]
}
```

---

### Workshops
This structure only concerns the Sunday Workshops. All these fields are pretty self-explanatory (I hope).
- `date.machine` [`string`]: must follow this **exact** format `YYMMDD-HHMM`.
- `date.human` [`string`]: this should be generated at runtime from the panel. No need to fill it or display it for editing.
- `tags` [`array of strings`]: can be anything.
- `links`: [`array of objects`]: must include a url and the text to be displayed.

#### Example
```json
{
	"title": "Intro to Arduino",
	"instructor": "Michael Shiloh",
	"date" {
		"machine": "180212-1800",
		"human":"Feb. 12th - 6:00pm"
		},
	"location":"IM Lab - C3-029",
	"description": "Arduino is fun and Michael knows a lot about it.",
	"tags": ["physical computing", "arduino"],
	"links": [
		{
		 "url":"https://github.com/michaelshiloh",
		 "text":"repo"
		 }
		]
}
```

---

### Opportunities
This structure is going to be dedicated to jobs, internships, grants and grad school applications.
- `category.main` [`string`] :  related to the broader category of the opportunity. Possible value are `INTERNSHIPS`, `JOBS`, `CALL FOR PROPOSALS`, `GRADUATE EDUCATION`.
- `category.sub` [`array of strings`] : realted to the topics of the opportunity. Exact values do not matter.
- ` connections`: [`array of objects`] : connection to the opportunity - NOT PUBLIC.

#### Example
```json
{
	"title":"Lab monitor position",
	"category":{
		"main":"JOBS",
		"sub": ["software development", "performance", "vr", "physical computing"]
		},
	"location": "Bulawayo, Zimbabwe",
	"url":"http://yoo.ooo/",
	"deadline": "June 6th 2018",
	"description":"do all these things on the other side of the world!"
	"connections":[
		{
		 "name":"John Doe",
		 "contact": "john@doe.com",
		 "relationship" : "friend of the program"
		}
		]
}
```

---

### People
This structure will populate our `/people` page, from Program Heads to Lab Monitors. The `current` attribute would be used in two ways: separating between current and past community members and only displaying current Lab Monitors (due to the sheer number of Monitors over time). Ideally, the `courses` list would point to the `/academics` page.
```json
{
	"name":"Craig Protzel",
	"position": ["program head"],
	"current": true,
	"description": {
		"short": "runs the ship",
		"long": "Craig comes from LA and has been doing editing and production work in the entertainment and teaching creative coding for a while!"
		},
	"courses": ["Communication and Technology", "Communication Lab", "Mashups: Creating with Web API", "Making Education", "Explorable Stories"],
	"website": "http://craigprotzel.com/",
	"email": "craig.protzel@nyu.edu",
	"img": "craigprotzel.png"
}
```

#### Projects
This structure will be used to populate the student gallery page. `description.short` is a one-liner, whereas `description.long` should be a paragraph describing the project, its features and the underlying concept in more detail. **Important**: images should be placed in the order you want them to appear on the page. In addition, the first image in the array will always appear as the project’s thumbnail image. Since the `tags` section is used to build the nav bar on the gallery page, tag names matter a lot. It is highly encouraged you don't write tags yourself, but rather use those generated by the Google Form used for project submissions. 

**TO CHANGE**: "authors" > "people" -- could "tech" be an array? might mess with your system.

```json
{
    "title": "Lumarca Building Workshop",
    "authors":["Miha Klasinc","Arantza Rodriguez","Davis Teague","Mari Calderon"],
    "description":{
      "short":"Community-based construction of a 3-dimensional projection display",
      "long":"long description(1 paragraph, max 2)"
    },
    "website":"https://www.myportfolio.com/lumarca/",
    "images":["thumbnail_photo.jpg","second_phot.png","third_photo.jpg"],
    "video":"https://vimeo.com/user12345",
    "tags":{
       "course":"Intro to IM",
       "semester":"Spring 2018",
       "tech":"Physical",
       "custom":["projection mapping","workshop"]
    }
}
```

---

## Panel Scripts

Tavius will document all this.

---

## Website Scripts

#### landing.js

#### sketch-manager.js

#### panel-connection.js

#### academics.js

#### activities.js

#### people.js

#### opportunities.js

---

## Website Style

#### Fonts

#### Colors
