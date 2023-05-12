const btn_janr = document.querySelector('.janr');
// const htm = `<article >
//     knopka 1 = latino, knopka 2 = rock, knopka 3 = electronic, knopka 4 = relax
//     </article> `
// btn_janr.insertAdjacentHTML('beforeend', htm)
// Вынимаем https ссылку для кнопки
function getValue(array, knopka) {
    let i = 0
    while (i < array.length) {
        console.log(i)
        console.log(knopka)
        console.log(array[i].tags)
        if (array[i].tags.includes(knopka)) {
        console.log(array[i].tags.includes(knopka))
        window.open(array[i].homepage).focus()
        return
        }
        i++
    }
}
// Обращаемся к базе данных через fetch и .then
const krData = function (knopka, genre) {
    const strana_str = document.getElementById('strana').value
    console.log(strana_str)
    fetch(
        `http://de1.api.radio-browser.info/json/stations/bycountry/${strana_str}`,
    )
    .then((response) => {
        console.log(response.status)
        if (!response.ok)
        throw new Error(`Ссылка не найдена. Ошибка ${response.status}`)
        return response.json()
    })
    .then(function (data) {
        getValue(data, knopka)
    })
    let strana = document.getElementById("strana").value;
  let tableRef = document.getElementById("radioTable").getElementsByTagName('tbody')[0];
  let newRow = tableRef.insertRow();
  
  let newCountryCell = newRow.insertCell();
  let newGenreCell = newRow.insertCell();
  
  newCountryCell.appendChild(document.createTextNode(strana));
  newGenreCell.appendChild(document.createTextNode(genre));
}
btn_janr.addEventListener('click', function() {
    const genre = 'rock'; // Replace with the actual genre selected
    krData('knopka', genre);
  });


    