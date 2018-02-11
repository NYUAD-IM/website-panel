---
layout: default
title:  "NYUADIM - Docs"
date:   2018-02-10 17:42:20 +0400
categories: data convention
---

# NYUAD IM Documentation

Hey there. This is an up-to-date documentation of how the NYUAD IM website works. The repo for the website is [here](https://github.com/NYUAD-IM/website) and our DIY content management systsem (modestly named *panel*) is [here](https://github.com/NYUAD-IN/website-panel)

#### Table of Contents
- [Data Structures](#data-structures)
- [Panel Scripts](#panel-scripts)
- [Website Scripts](#website-scripts)
- [Website Style](#website-style)

---

## Data Structures

#### Academics
This represents all of the classes displayed on `/academics`, whether IM requirements, electives or non-IM classes. The `track` attribute is related to the tracks mentioned in the major proposal (*Computational Media*, *Physical Computing*, *Media and Design Thinking*). The `description.short` attribute is a one-line display, while the `description.long` is revealed on click. The `tag` attribute points to `/gallery` and display projects based on that tag.
```json
{
	"title": "Communications Lab",
	"program":"Interactive Media",
	"track": "Foundation",
	"instructors": ["Craig Protzel", "Pierre Depaz"],
	"terms":["Fall 2018", "Spring 2018"],
	"link":"http://commlab.nyuad.im",
	"description":{
		"short": "intro to multimedia storytelling",
		"long": "very long intro"
		},
	"cross-listings": ["Computer Science", "Psychology"],
	"tags": ["commlab"]
}
```

---

#### Workshops
This structure only concerns the Sunday Workshops. All these fields are pretty self-explanatory (I hope).
**Potential issue:** the time format might need to be broken down in order to filter by date? The current fix is the `upcoming` attribute but that would need to be manually updated.
```json
{
	"title": "Intro to Arduino",
	"instructor": "Michael Shiloh",
	"date":"Feb. 12th - 6:00pm",
	"upcoming":"true",
	"location":"IM Lab - C3-029",
	"description": "Arduino is fun and Michael knows a lot about it."
}
```

---

#### Opportunities
This structure is going to be dedicated to jobs, internships, grants and grad school applications. Again, these fields should be self-explanatory.
```json
{
	"title":"Lab monitor position",
	"category":["software development", "performance", "vr", "physical computing"],
	"location": "Bulawayo, Zimbabwe",
	"url":"http://yoo.ooo/",
	"deadline": "June 6th 2018",
	"description":"do all these things on the other side of the world!"
}
```

---

#### People
This structure will populate our `/people` page, from Program Heads to Lab Monitors. The `current` attribute would be used in two ways: separating between current and past community members and only displaying current Lab Monitors (due to the sheer number of Monitors over time). Ideally, the `courses` list would point to the `/academics` page.
```json
{
	"name":"Craig Protzel",
	"position": "program head",
	"current": "true",
	"responsibilities": "runs the ship",
	"courses": ["Communication and Technology", "Communication Lab", "Mashups: Creating with Web API", "Making Education", "Explorable Stories"],
	"website": "http://craigprotzel.com/",
	"email": "craig.protzel@nyu.edu",
	"blurb": "Craig comes from LA and has been doing editing and production work in the entertainment and teaching creative coding for a while!"
}
```

#### Projects
This is Miha's thing. I'll let him describe what some ambiguous fields might be.
```json
{
    "title": "Lumarca Building Workshop",
    "authors":["Miha Klasinc","Arantza Rodriguez","Davis Teague","Mari Calderon"],
    "description":{
      "short":"Community-based construction of a 3-dimensional projection display",
      "long":"Lumarca is a volumetric display by Matt Parker and Albert Huang that uses projection onto a field of strings to create an illusion of depth, which effectively turns a 2-dimensional projection into a 3-dimensional display. In fall 2017, Interactive Media students constructed their own Lumarca display as part of a weekend-long workshop."
    },
    "website":"https://www.myportfolio.com/lumarca/",
    "img":["img_01.jpg","img_02.png","img_03.jpg"],
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
