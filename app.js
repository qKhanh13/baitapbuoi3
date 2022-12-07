//bai tap 1
// 1
let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    string += "1";
  }
  string += "\n";
}
console.log(string);
//2


let arr = [9,7,9,0,7,8,387,123,456]
for(let i = 0 ; i < arr.length ; i++){
    console.log(arr[i]);
    if(arr[i] % 2 == 0){
        console.log("Số chăn của bạn là :", arr[i]);
    }else{
        console.log("Số lẻ của bạn là:", arr[i]);
    }
}

//3
let a = prompt("Em đã ăn cơm chưa!(Mời nhập yes or no)")
if (a =='yes'){
    prompt("Em có muốn ăn bánh ngọt tráng miệng không?")
    alert("Làm gì còn bánh ngọt cho em ăn nữa :V")
    alert("Thử lại với no xem sao !")
}
else if (a == 'no'){
    prompt("Em muốn ăn cơm với sườn sào chua ngọt không?")
    alert("hết sườn rồi )))")
}
else{
  alert("Chúc em ngon miệng =))")
};