import showCountryDetails from './show-country-details.js';

export default function showCountry(data) {
  const countries = document.querySelector('.countries');
  const country = document.createElement('section');
  country.classList.add('country');
  country.classList.add('color-swap');
  country.innerHTML=
        `<section class="country-img">
            <img src="${data.flags.png}" alt="${data.flags.alt}">
        </section>
        <section class="country-details">
            <h2 class="country-name">${data.name.common}</h2>
            <p><strong>Population: </strong>${data.population.toLocaleString('en-US')}</p>
            <p class="region-name"><strong>Region: </strong>${data.region}</p>
            <p><strong>Capital: </strong>${data.capital}</p>
        </section>`;
  countries.appendChild(country);
  country.addEventListener('click', ()=>{
    showCountryDetails(data);
  });
}
