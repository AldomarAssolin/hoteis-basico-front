const list = document.querySelector('.listItemschristimas');
const listByrds = document.querySelector('.listItemsByrds');
list.innerHTML = '';
let greetings = [
    "Happy Birthday!",
    "Merry Christmas my love",
    "A happy Christmas to all the family",
    "You're all I want for Christmas",
    "Get well soon"
]


for (var i = 0; i < greetings.length; i++) {
    let input = greetings[i]
    if (input.indexOf('Christmas') !== -1) {
        let result = input
        let listItemC = document.createElement('li')
        listItemC.textContent = result
        list.appendChild(listItemC)
    }
    if (input.indexOf('Christmas') == -1) {
        let result = input
        let listItem = document.createElement('li')
        listItem.textContent = result
        listByrds.appendChild(listItem)
    }
}

//capitalizacao

const listCapi = document.querySelector('.capi')
listCapi.innerHTML = '';
let cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL']

for (let i = 0; i < cities.length; i++) {
    let input = cities[i]
    let inputLower = input.toLowerCase()
    let firstUpper = inputLower[0].toUpperCase() + inputLower.slice(1)
    let result = firstUpper
    let listItemCapi = document.createElement('li')
    listItemCapi.textContent = result
    listCapi.appendChild(listItemCapi)
}
//estaçoes de trem

const listTrem = document.querySelector('.trem')
listTrem.innerHTML = '';
let stations = [
    'MAN675847583748sjt567654;Manchester Piccadilly',
    'GNF576746573fhdg4737dh4;Greenfield',
    'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
    'SYB4f65hf75f736463;Stalybridge',
    'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
];

for (let i = 0; i < stations.length; i++) {
    let inputTrens = stations[i]

    let codTrens = inputTrens.slice(0, 3)

    let splits = inputTrens.indexOf(';')
    let codStation = inputTrens.slice(splits + 1)
    let stationPlat = `${codTrens}: ${codStation}`

    let result = stationPlat
    let listItemTrem = document.createElement('li')
    listItemTrem.textContent = result
    listTrem.appendChild(listItemTrem)
}
