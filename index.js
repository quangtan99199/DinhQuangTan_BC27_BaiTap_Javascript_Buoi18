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

function baiTap3() {
  var min = nums[0];
  if (nums.length === 0) {
    var divResult = document.getElementById("ketQua3");
    divResult.style.display = "block";
    divResult.innerHTML = `Số nhỏ nhất:`;
    return;
  } else {
    for (i = 0; i < nums.length; i++) {
      if (nums[i] < min) {
        min = nums[i];
      }
    }
  }
  var divResult = document.getElementById("ketQua3");
  divResult.style.display = "block";
  divResult.innerHTML = `Số nhỏ nhất: ${min}`;
}

function baiTap4() {
  var positiveNumberArray = [];
  for (i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      positiveNumberArray.push(nums[i]);
    }
  }
  if (positiveNumberArray.length === 0) {
    var divResult = document.getElementById("ketQua4");
    divResult.style.display = "block";
    divResult.innerHTML = `Không có số dương trong mảng`;
    return 0;
  } else {
    min = positiveNumberArray[0];
    for (i = 0; i < positiveNumberArray.length; i++) {
      if (positiveNumberArray[i] < min) {
        min = positiveNumberArray[i];
      }
    }
  }
  var divResult = document.getElementById("ketQua4");
  divResult.style.display = "block";
  divResult.innerHTML = `Số dương nhỏ nhất: ${min}`;
}

function baiTap5() {
  if (nums.length === 0) {
    var divResult = document.getElementById("ketQua5");
    divResult.innerHTML = `Số chẵn cuối cùng:`;
    return;
  } else {
    for (i = 0; i < nums.length; i++) {
      if (nums[i] % 2 == 0) {
        lastEvenNumber = nums[i];
      }
    }
  }
  var divResult = document.getElementById("ketQua5");
  divResult.style.display = "block";
  divResult.innerHTML = `Số chẵn cuối cùng: ${lastEvenNumber}`;
}

function baiTap7() {
  nums.sort(compare);
  var divResult = document.getElementById("ketQua7");
  divResult.style.display = "block";
  divResult.innerHTML = ` Mảng sau khi sắp xếp: ${nums}`;
  display(nums);
}
function compare(a, b) {
  return a - b;
}

function baiTap8() {
  var primeArray = [];
  for (var i = 0; i < nums.length; i++) {
    if (isPrime(nums[i]) === true) {
      primeArray.push(nums[i]);
      break;
    }
  }
  if (primeArray.length === 0) {
    var divResult = document.getElementById("ketQua8");
    divResult.style.display = "block";
    divResult.innerHTML = `Không có số nguyên tố nào trong mảng`;
    return 0;
  }
  var divResult = document.getElementById("ketQua8");
  divResult.style.display = "block";
  divResult.innerHTML = `Số nguyên tố đầu tiên: ${primeArray}`;
}

function isPrime(n) {
  var count = 0;
  if (n < 2) {
    count++;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      count++;
    }
  }
  if (count != 0) {
    return false;
  } else {
    return true;
  }
}

function baiTap9() {
  var count = 0;
  for (i = 0; i < number2.length; i++) {
    if (Number.isInteger(number2[i])) {
      count++;
    }
  }
  var divResult = document.getElementById("ketQua9");
  divResult.innerHTML = `Số nguyên: ${count}`;
}

function baiTap10() {
  var positive = 0;
  var negative = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      positive++;
    } else if (nums[i] < 0) {
      negative++;
    }
  }
  console.log(positive, negative);
  if (positive > negative) {
    var divResult = document.getElementById("ketQua10");
    divResult.style.display = "block";
    divResult.innerHTML = `Số dương > Số âm `;
  } else if (negative > positive) {
    var divResult = document.getElementById("ketQua10");
    divResult.style.display = "block";
    divResult.innerHTML = `Số âm > Số dương`;
  } else {
    var divResult = document.getElementById("ketQua10");
    divResult.style.display = "block";
    divResult.innerHTML = `Số âm = Số dương `;
  }
}
