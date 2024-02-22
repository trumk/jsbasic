let a = 5
let b = 6.9
let x = 5;
let y = 5;
let z = 6;
const aespa = ["winter","winter","karina","winter"];

function addDataToParagraphs() {
    // Truy xuất tất cả các phần tử p có class là "demo"
    var paragraphs = document.querySelectorAll(".demo");
  
    // Lặp qua từng phần tử p và thêm dữ liệu từ mảng aespa vào
    for (var i = 0; i < paragraphs.length; i++) {
      paragraphs[i].textContent = aespa[i];
    }
  }

console.log(`a is: "`+ a +`" and b is: "`+ b+`"`)
console.log(`The first comparison between x and y is: "`+(x==y)+`", the second comparison between y and z is: "`+(y==z)+`"`)