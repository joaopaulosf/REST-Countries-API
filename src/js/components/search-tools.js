function regionFilter() {
  const region = document.querySelectorAll('.region');
  region.forEach((element) => {
    const regionName = document.getElementsByClassName('region-name');
    element.addEventListener('click', ()=>{
      Array.from(regionName).forEach((elem) => {
        if (elem.innerText.includes(element.innerText) || element.innerText == 'All' ) {
          elem.parentElement.parentElement.style.display='grid';
        } else {
          elem.parentElement.parentElement.style.display='none';
        }
      });
    });
  });
}

function searchBar() {
  const search = document.querySelector('.search');
  const countryName = document.getElementsByClassName('country-name');
  search.addEventListener('input', ()=>{
    Array.from(countryName).forEach((elem) => {
      if (elem.innerText.toLowerCase().includes(search.value.toLowerCase())) {
        elem.parentElement.parentElement.style.display='grid';
      } else {
        elem.parentElement.parentElement.style.display='none';
      }
    });
  });
}

const searchTools = {
  regionFilter,
  searchBar,
};

export default searchTools;
