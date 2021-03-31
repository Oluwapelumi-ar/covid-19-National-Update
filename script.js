const baseUrl = 'https://covid-api.mmediagroup.fr/v1/cases';
const vaccine = 'https://covid-api.mmediagroup.fr/v1/vaccines'
const output = document.querySelector('#Output')
const vaccineOutput = document.querySelector('#vaccineOutput')

const getData = async () => {
    const response = await fetch(baseUrl)
    const data = await response.json() 
    return data
}

const vaccineData = async () => {
    const vaccines = await fetch(vaccine)
    const data = await vaccines.json()
    return data
  }


window.addEventListener('load', async () => {
    const covidData = await getData()
    const NigeriacovidData = covidData.Nigeria
    output.innerHTML =`
        <h6>Confirmed Cases: ${NigeriacovidData.All.confirmed}</h6>
        <h6>Recovered: ${NigeriacovidData.All.recovered} </h6>
        <h6>Deaths: ${NigeriacovidData.All.deaths} </h6>
        `;

    const vaccineInfo = await vaccineData()
    const NigeriaVaccineInfo = vaccineInfo.Nigeria.All
    vaccineOutput.innerHTML = `
      <h6>Administered: ${NigeriaVaccineInfo.administered}</h6>
      <h6>Number Of people Vaccinated: ${NigeriaVaccineInfo.people_vaccinated}</h6>
      `
  })


  






