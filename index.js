// Group Assignment: Exploring Space APIs
// In this assignment, you will use two APIs to fetch data and perform specific tasks with that data.
// The two APIs you will work with are:
let APInum1="https://api.nasa.gov/"
let APInum2="http://open-notify.org/Open-Notify-API/"
// 1. The "People in Space" API, which gives information about the people currently in outer space.

// 2. The NASA Astronomy Picture of the Day (APOD) API, which provides a daily picture or video related to astronomy.

async function fetchAstronauts(requestURL) {
        
}

// CALL your function here

// TASK 1: Fetch Data from the "People in Space" API
let requestURL111="http://open-notify.org/Open-Notify-API/People-In-Space/"
// 1. Find the "People in Space" API: http://open-notify.org/
// 2. Identify whether you need to be authenticated with an API Key, if so create an account and save your key. 

// 3. Navigate the documenation and create a request URL to fetch a list of all the people in outer space.
let requestURL= "http://api.open-notify.org/astros.json"
// 4. Make a fetch request and format your resulting JSON. 
async function fetchData(){
    const response = await fetch(requestURL)
    const data = await response.json()
    console.log(data)
    return data
}
fetchData()
console.log(data.data[0].people)
// 5. Log the data to the console to inspect its structure.
// 6. Modify the console log to only show the name of the 8th listed person in outerspace. 


// TASK 2: Fetch Data from the NASA Astronomy Picture of the Day (APOD) API

// 1. Find the "Astronomy Picture of the Day" API: https://api.nasa.gov/
// 2. Identify whether you need to be authenticated with an API Key, if so create an account and save your key. 
// 3. Navigate the documenation and create a request URL to fetch a list of all the people in outer space.
// 4. Make a fetch request and format your resulting JSON. 
// 5. Log the data to the console to inspect its structure.
// 6. Modify the console log to only show the URL of today's astronomy picture. 

async function fetchPictures(requestURL) {
        
}

// CALL your function here
