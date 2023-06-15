
const carDatabase = [];


document.getElementById('carForm').addEventListener('submit', function(event) {
  event.preventDefault(); // 防止表單提交時刷新頁面

  
  const make = document.getElementById('make').value;
  const model = document.getElementById('model').value;
  const year = document.getElementById('year').value;
  const price = document.getElementById('price').value;


  const newCar = {
    make: make,
    model: model,
    year: year,
    price: price
  };


  carDatabase.push(newCar);


  document.getElementById('carForm').reset();


  displayCarList();
});


function displayCarList() {
  const carListDiv = document.getElementById('carList');

 
  carListDiv.innerHTML = '';

  
  carDatabase.forEach(function(car) {
    const carItem = document.createElement('div');
    carItem.classList.add('car-item');

    const makeModel = document.createElement('p');
    makeModel.textContent = car.make + ' ' + car.model;

    const yearPrice = document.createElement('p');
    yearPrice.textContent = car.year + '年, $' + car.price;

    carItem.appendChild(makeModel);
    carItem.appendChild(yearPrice);

    carListDiv.appendChild(carItem);
  });
}

displayCarList();
