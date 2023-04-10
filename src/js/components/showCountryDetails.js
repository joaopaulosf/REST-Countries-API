export default function showCountryDetails(data) {
    const countryModal = document.querySelector(".countryModal")
    countryModal.classList.toggle("show")
    countryModal.classList.add("backgroundSwap")
    countryModal.innerHTML =
        `
            <button class="back colorSwap"></button>
            <section class="modal">
                <section class="leftModal">
                    <img src="${data.flags.png}" alt="${data.flags.alt}">
                </section>
                <section class="rigthModal">
                    <h1>${data.name.common}</h1>
                    <section class="innerLeft">
                        <p><strong>Native Name: </strong>${data.name.nativeName[Object.keys(data.name.nativeName)[0]].official}</p>
                        <p><strong>Population: </strong>${data.population}</p>
                        <p><strong>Region: </strong>${data.region}</p>
                        <p><strong>Sub Region: </strong>${data.subregion}</p>
                        <p><strong>Capital: </strong> ${data.capital}</p>
                    </section>
                    <section class="innerRight">
                        <p><strong>Top Level Domain: </strong>${data.tld}</p>
                        <p><strong>Currencies: </strong>${data.currencies[Object.keys(data.currencies)[0]].name}</p>
                        <p><strong>Languages: </strong>${data.languages[Object.keys(data.languages)[0]]}</p>
                    </section>
                    <section class="borders">
                        <h2><strong>Border Countries:</strong></h2>
                        <p>${data.borders?.map(elem=>elem)}</p>
                    </section>
                </section>
            </section>
        `

    const back = document.querySelector(".back")
    back.addEventListener("click",()=>{countryModal.classList.toggle("show")})
}