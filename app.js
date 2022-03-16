const app = {
    locations: [
        { "id": 1, "hotelName": "Uptown", "city": "Bali", "continent": "Asia", "country": "Indonesia", "cat": "active", "star": 3, "temp": "mild", "loc": "mountain", "ppn": 120 },
        { "id": 2, "hotelName": "Relaxamax", "city": "New Orleans", "continent": "North America", "country": "USA", "cat": "lazy", "star": 4, "temp": "mild", "loc": "city", "ppn": 28 },
        { "id": 3, "hotelName": "WindyBeach", "city": "Ventry", "continent": "Europe", "country": "Ireland", "cat": "active", "star": 3, "temp": "mild", "loc": "sea", "ppn": 42 },
        { "id": 4, "hotelName": "Twighlight", "city": "Marrakech", "continent": "Africa", "country": "Morocco", "cat": "lazy", "star": 5, "temp": "cold", "loc": "mountain", "ppn": 50 },
        { "id": 5, "hotelName": "TooHot", "city": "Sydney", "continent": "Australia", "country": "Australia", "cat": "lazy", "star": 5, "temp": "hot", "loc": "sea", "ppn": 67 },
        { "id": 6, "hotelName": "Castaway", "city": "", "continent": "Africa", "country": "The Maldives", "cat": "lazy", "star": 3, "temp": "mild", "loc": "sea", "ppn": 120 },
        { "id": 7, "hotelName": "Eiffel Park", "city": "Paris", "continent": "Europe", "country": "France", "cat": "active", "star": 4, "temp": "mild", "loc": "city", "ppn": 45 },
        { "id": 8, "hotelName": "The Cape", "city": "Cape Town", "continent": "Africa", "country": "South Africa", "cat": "active", "star": 4, "temp": "mild", "loc": "sea", "ppn": 78 },
        { "id": 9, "hotelName": "Desert Dreams", "city": "Dubai", "continent": "Asia", "country": "U.A.E", "cat": "active", "star": 4, "temp": "hot", "loc": "mountain", "ppn": 67 },
        { "id": 10, "hotelName": "SeaViews", "city": "Bora Bora", "continent": "Australia", "country": "French Polynesia", "cat": "active", "star": 3, "temp": "mild", "loc": "sea", "ppn": 54 },
        { "id": 11, "hotelName": "AppleCity", "city": "New York", "continent": "North America", "country": "USA", "cat": "active", "star": 3, "temp": "mild", "loc": "city", "ppn": 27 },
        { "id": 12, "hotelName": "IslandHopper", "city": "Dubrovnik", "continent": "Europe", "country": "Croatia", "cat": "active", "star": 5, "temp": "mild", "loc": "sea", "ppn": 78 },
        { "id": 13, "hotelName": "CastleTown", "city": "Edinburgh", "continent": "Europe", "country": "Scotland", "cat": "lazy", "star": 3, "temp": "mild", "loc": "city", "ppn": 53 },
        { "id": 14, "hotelName": "WineValley", "city": "Rome", "continent": "Europe", "country": "Italy", "cat": "lazy", "star": 5, "temp": "mild", "loc": "city", "ppn": 25 },
        { "id": 15, "hotelName": "WearyTraveller", "city": "Paro Valley", "continent": "Asia", "country": "Bhutan", "cat": "active", "star": 5, "temp": "mild", "loc": "mountain", "ppn": 54 },
        { "id": 16, "hotelName": "HotTimes", "city": "Jaipur", "continent": "Asia", "country": "India", "cat": "lazy", "star": 4, "temp": "hot", "loc": "sea", "ppn": 67 },
        { "id": 17, "hotelName": "ForestRetreat", "city": "Waikato", "continent": "Australia", "country": "New Zealand", "cat": "active", "star": 4, "temp": "mild", "loc": "mountain", "ppn": 89 },
        { "id": 18, "hotelName": "Casablanca", "city": "Havana", "continent": "North America", "country": "Cuba", "cat": "lazy", "star": 5, "temp": "mild", "loc": "city", "ppn": 29 },
        { "id": 19, "hotelName": "TechCity", "city": "Tokyo", "continent": "Asia", "country": "Japan", "cat": "active", "star": 3, "temp": "mild", "loc": "city", "ppn": 71 },
        { "id": 20, "hotelName": "IceHotel", "city": "Base Marambio", "continent": "Antarctica", "country": "Antarctica", "cat": "active", "star": 5, "temp": "cold", "loc": "mountain", "ppn": 270 },
        { "id": 21, "hotelName": "NorthStar", "city": "", "continent": "Arctic", "country": "Greenland", "cat": "active", "star": 5, "temp": "cold", "loc": "mountain", "ppn": 250 }
    ],
    init: () => {
        // const locButton = document.getElementById('locButton');

        // if (locButton != null) {
        //     locButton.addEventListener('click', app.calcIdealLocation);
        // }

        document.querySelectorAll('.fbutton').forEach(b => {
            b.addEventListener('click', (e) => {
               const next = app.getParentHierarchy(e).find(l => l.classList.contains('fbutton'));
               
               if (next != null) {
                   app.showLayer(next.dataset.next);
               }
            });
        });
    },
    calcIdealLocation: (e) => {
        const idealLocation = document.getElementById('idealLocation');

        if (idealLocation != null) {
            const catID = document.getElementById('catID');
            const starRating = document.getElementById('starRating');
            const temp = document.getElementById('temp');
            const location = document.getElementById('location');
            const ppn = document.getElementById('ppn');

            if (
                catID != null &&
                starRating != null &&
                temp != null &&
                location != null &&
                ppn != null
            ) {
                const html = [];
                const htmlTemplate = document.getElementById('template_idealLocation').innerHTML;
                const fname = document.getElementById('fname').value;

                html.push(`Dear ${fname}, Please find the following locations that match your criteria<br><br>`);

                for (const loc of app.locations.filter(l => {
                    return (
                        ((catID.value != -1 && l.cat == catID.value) || catID.value == -1) &&
                        ((starRating.value != -1 && l.star == starRating.value) || starRating.value == -1) &&
                        ((temp.value != -1 && l.temp == temp.value) || temp.value == -1) &&
                        ((location.value != -1 && l.loc == location.value) || location.value == -1) &&
                        ((ppn.value != -1 && l.ppn == ppn.value) || ppn.value == -1)
                    );
                })) {
                    html.push(app.render(htmlTemplate, {
                        hotelName: loc.hotelName,
                        city: loc.city == '' ? 'Unknown City' : loc.city,
                        country: loc.country,
                        continent: loc.continent
                    }));
                }

                idealLocation.innerHTML = html.join(`\n`);
            } else {
                console.error('DOM missing one or more HTML input elements');
            }
        } else {
            console.error('DOM missing idealLocation element');
        }
    },
	render: (htmlString, dataObject) => {
		if (htmlString == null) {
			return '';
		}
		
		let newHTML = '';
		
		if (typeof htmlString == 'string') {
			newHTML = htmlString;
		} else if (typeof htmlString.html == 'function') {
			newHTML = htmlString.html();
		} else {
			return '';
		}
		
		for (const i in dataObject) {
			if (dataObject.hasOwnProperty(i)) {
				if (typeof dataObject[i] == 'object') {
					newHTML = newHTML.replace(new RegExp('{{' + i + '}}', 'g'), $(dataObject[i]).prop('outerHTML'));
				} else {
					newHTML = newHTML.replace(new RegExp('{{' + i + '}}', 'g'), dataObject[i]);
				}
			}
		}
		
		return newHTML;
	},
    getParentHierarchy: (e) => {
		const htmlElements = [];
		
		for (const item of e.composedPath()) {
			htmlElements.push(item);
		}
		
		return htmlElements;
	},
    showLayer: (id) => {
        document.querySelectorAll('.fgroup').forEach(f => f.classList.toggle('hidden', true));
        document.getElementById(id).classList.remove('hidden');

        if (id == 'finalLayer') {
            app.calcIdealLocation();
        }
    }
};
