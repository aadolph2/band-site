const shows = [
    {
    "date": "Mon Sept 06 2021",
    "venue": "Ronald Lane",
    "location": "San Francisco, CA"
    },
    {
    "date": "Tue Sept 21 2021",
    "venue": "Pier 3 East",
    "location": "San Francisco, CA"   
    },
    {
    "date": "Fri Oct 15 2021",
    "venue": "View Lounge",
    "location": "San Francisco, CA"   
    },
    {
    "date": "Sat Nov 06 2021",
    "venue": "Hyatt Agency",
    "location": "San Francisco, CA"   
    },
    {
    "date": "Fri Nov 26 2021",
    "venue": "Moscow Center",
    "location": "San Francisco, CA"   
    },
    {
    "date": "Wed Dec 15 2021 ",
    "venue": "Press Club",
    "location": "San Francisco, CA"   
    }
]

    

    for (let i = 0; i < shows.length; ++i) {
        const showsItem = shows[i].date;
        //creating var to hold string

        // const venueItem = shows[i].venue;
        // const locationItem = shows[i].location;

        let container = document.createElement("div");
        //creating the div container
        let element = document.createElement("p");
        //creating p element to hold text from object
        element.innertext = showsItem.date;
        element.classList.add("shows__title")
        //adding class to p element

        container.append(element);
    }
