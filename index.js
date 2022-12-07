//home button
let homeScoreButtonOne = document.getElementById('home-btn-one');
let homeScoreButtonTwo = document.getElementById('home-btn-two');
let homeScoreButtonThree = document.getElementById('home-btn-three');
let homeScoreEl = document.getElementById('home-score');
let homeScore = 0

function addHomeOne() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function addHomeTwo() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function addHomeThree() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}


//guest button
let guestScoreButtonOne = document.getElementById('guest-btn-one');
let guestScoreButtonTwo = document.getElementById('guest-btn-two');
let guestScoreButtonThree = document.getElementById('guest-btn-three');
let guestScoreEl = document.getElementById('guest-score');
let guestScore = 0


function addGuestOne() {
guestScore += 1
    guestScoreEl.textContent = guestScore
}

function addGuestTwo() {
guestScore += 2
    guestScoreEl.textContent = guestScore
}

function addGuestThree() {
guestScore += 3
    guestScoreEl.textContent = guestScore
}

//reset button
let resetButton = document.getElementById('reset-btn')

function reset() {
    homeScoreEl.textContent = 0
    guestScoreEl.textContent = 0
}
