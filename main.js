// 假設您有一個用於存儲車輛的數據庫或數據結構
const carDatabase = [];

// 監聽表單提交事件
document.getElementById('carForm').addEventListener('submit', function(event) {
  event.preventDefault(); // 防止表單提交時刷新頁面

  // 獲取表單輸入的值
  const make = document.getElementById('make').value;
  const model = document.getElementById('model').value;
  const year = document.getElementById('year').value;
  const price = document.getElementById('price').value;

  // 創建一個新的車輛對象
  const newCar = {
    make: make,
    model: model,
    year: year,
    price: price
  };

  // 將車輛添加到數據庫
  carDatabase.push(newCar);

  // 清空表單
  document.getElementById('carForm').reset();

  // 更新車輛清單顯示
  displayCarList();
});

// 顯示車輛清單
function displayCarList() {
  const carListDiv = document.getElementById('carList');

  // 清空車輛清單
  carListDiv.innerHTML = '';

  // 遍歷車輛數據庫，生成車輛清單
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

// 初始化時顯示車輛清單
displayCarList();