import showCountry from "./showCountry.js"

export default async function getCountries() {
    const url = await fetch("https://restcountries.com/v3.1/all");
    const res = await url.json();
    res.forEach(data =>{showCountry(data)});
};

