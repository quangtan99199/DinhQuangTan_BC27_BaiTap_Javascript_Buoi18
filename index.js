var nums = [];

function addNumbers() {
  //B1: DOM tới input và lấy value
  var number = +document.getElementById("number").value;
  // Thêm value vừa lấy vào mảng nums
  nums.push(number);
  var divResult = document.getElementById("arraySpan");
  divResult.style.display = "block";
  divResult.innerHTML = `Mảng: ${nums}`;
}

function removeNumber() {
  number.pop(number);
  display(number);
}

nums.push(number);
//B3: Tính toán
function baiTap1() {
  var sum1 = 0; // tổng các số dương
  // Duyệt mảng để xác định giá trị của từng phần tử trong mảng
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      sum1 += nums[i];
    }
  }
  var divResult = document.getElementById("ketQua1");
  divResult.style.display = "block";
  divResult.innerHTML = `Tổng số nguyên dương: ${sum1}`;
}


function baiTap2() {
  var count = 0;
  for (var i = 0; i < nums.length; i++) {
      if (nums[i] > 0) {
          count++;
      }
  }
  var divResult = document.getElementById("ketQua2");
  divResult.style.display = "block";
  divResult.innerHTML = `Số dương: ${count}`;
}

function display(array) {
  // baiTap1(array)
  // baiTap2(array)
  baiTap3(array)
  baiTap4(array)
  baiTap5(array)
  baiTap8(array)
  baiTap10(array)
  var divResult = document.getElementById("arraySpan")
  divResult.style.display = "inline";
  divResult.innerHTML = `${array}`

}

function baiTap3() {
  var min = nums[0]
  if (nums.length === 0) {
      var divResult = document.getElementById("ketQua3");
      divResult.innerHTML = `Số nhỏ nhất:`;
      return;
  }
  else {
      for (i = 0; i < nums.length; i++) {
          if (nums[i] < min) {
              min = nums[i]
          }
      }
  }
  var divResult = document.getElementById("ketQua3");
  divResult.style.display = "block";
  divResult.innerHTML = `Số nhỏ nhất: ${min}`;
}