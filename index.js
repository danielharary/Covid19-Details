var data = [
    {
        Country: "Spain",
        CountryCode: "ES",
        NewConfirmed: 9571,
        TotalConfirmed: 3300965,
        NewDeaths: 157,
        TotalDeaths: 75698,
        NewRecovered: 0,
        TotalRecovered: 150376
    },
    {
        Country: "Germany",
        CountryCode: "DE",
        NewConfirmed: 3673,
        TotalConfirmed: 2886029,
        NewDeaths: 70,
        TotalDeaths: 77010,
        NewRecovered: 9210,
        TotalRecovered: 2575740
    },
    {
        Country: "France",
        CountryCode: "FR",
        NewConfirmed: 0,
        TotalConfirmed: 4802545,
        NewDeaths: 0,
        TotalDeaths: 96439,
        NewRecovered: 0,
        TotalRecovered: 304563
    },
    {
        Country: "Russian Federation",
        CountryCode: "RU",
        NewConfirmed: 8906,
        TotalConfirmed: 4520879,
        NewDeaths: 377,
        TotalDeaths: 98363,
        NewRecovered: 9516,
        TotalRecovered: 4147974
    },
    {
        Country: "Italy",
        CountryCode: "IT",
        NewConfirmed: 21247,
        TotalConfirmed: 3650247,
        NewDeaths: 376,
        TotalDeaths: 110704,
        NewRecovered: 21311,
        TotalRecovered: 2974688
    },
    {
        Country: "United Kingdom",
        CountryCode: "GB",
        NewConfirmed: 3424,
        TotalConfirmed: 4371393,
        NewDeaths: 10,
        TotalDeaths: 127068,
        NewRecovered: 32,
        TotalRecovered: 13222
    },
    {
        Country: "India",
        CountryCode: "IN",
        NewConfirmed: 93249,
        TotalConfirmed: 12485509,
        NewDeaths: 513,
        TotalDeaths: 164623,
        NewRecovered: 60048,
        TotalRecovered: 11629289
    },
    {
        Country: "Mexico",
        CountryCode: "MX",
        NewConfirmed: 1838,
        TotalConfirmed: 2249195,
        NewDeaths: 157,
        TotalDeaths: 204011,
        NewRecovered: 0,
        TotalRecovered: 1765244
    },
    {
        Country: "Brazil",
        CountryCode: "BR",
        NewConfirmed: 43515,
        TotalConfirmed: 12953597,
        NewDeaths: 1987,
        TotalDeaths: 330193,
        NewRecovered: 49878,
        TotalRecovered: 11327510
    },
    {
        Country: "United States of America",
        CountryCode: "US",
        NewConfirmed: 62154,
        TotalConfirmed: 30671844,
        NewDeaths: 676,
        TotalDeaths: 554779,
        NewRecovered: 0,
        TotalRecovered: 0
    }
];


let button = document.getElementById('button');
let table = document.getElementById('table');
button.addEventListener('click', function () {
    let tbody = document.createElement('tbody');
    for (let i = 0; i < data.length; i++) {
        let currentRow = Object.values(data[i]);// country,countryCode...
        let tr = document.createElement('tr');
        for (let j = 0; j < currentRow.length; j++) {
            let td = document.createElement('td');
            td.innerText = currentRow[j];
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
        table.appendChild(tbody);
    }

});