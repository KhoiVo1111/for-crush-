var chaoMung = 'Welcome to VoKhoi website';
var xacNhan = 'Quá trình xác nhận';
var bdXacnhan = 'Bắt đầu quá trình xác nhận';
var hoanTat = 'Quá trình xác thực hoàn tất';
var loiXacthuc = 'Quá trình xác thực gặp lỗi do thông tin không chính xác hoặc lỗi hệ thống';

alert(chaoMung);
console.log('Bắt đầu quá trình xác nhận');

var nhacNhoNS = 'Vui lòng nhập ngày sinh của bạn để xác thực thông tin';
confirm(nhacNhoNS);

console.warn(bdXacnhan);

var birthDay = prompt("Nhập ngày sinh của bạn");

if (birthDay == 31) {
  console.log(hoanTat);
  alert('Hoàn thành xác thực lần 1');
  confirm('Nhấn OK để tiếp tục');
  console.warn(bdXacnhan);

  var birthMonth = prompt('Nhập tháng sinh của bạn');

  if (birthMonth == 8 || birthMonth == 08) {
    console.log(hoanTat);
    alert('Hoàn thành xác thực lần 2');
    confirm('Nhấn OK để tiếp tục');
    console.warn(bdXacnhan);

    var birthYear = prompt('Nhập năm sinh của bạn');

    if (birthYear == 2008 || birthYear == 08) {
      console.log(hoanTat);
      alert('Hoàn thành xác thực lần 3');
      confirm('Nhấn OK để tiếp tục');
      alert('Lần xác thực cuối cùng');
      alert('Hãy trả lời đúng nhe fen !!!');
      var yesOrno = prompt('Tôi có tốt không? Nếu có, hãy nhập Y. Nếu không, hãy nhập N.');

      if (yesOrno.toLowerCase() === 'y') {
        alert('Cảm ơn bạn rất nhiều!');
        alert('I love you');
        alert('Good bye');
       var input = prompt('Chơi một trò chơi hem? Nhập 1 nếu tiếp tục hoặc 2 nếu khum');

if (input === "1") {
  alert('Lét gôooooooo');
  var kDay = prompt('Nhập ngày sinh của tui');
  var kMonth = prompt('Nhập tháng sinh của tui');
  var kYear = prompt('Nhập năm sinh của tui');
  if(kDay == 22 && kMonth==8 && kYear==2008){
    var randomNum = Math.floor(Math.random() * 100) + 1;
var message = "Chúc mừng bạn đã nhận đc " + randomNum + "k! vì trả lời đúng. Hãy cap màn hình và gửi cho tôi đi";
alert(message);
  }else{
    alert("chia buốn bạn đã sai rùi!! hahahahha")
  }
 } else if (input === "2") {
  alert('huhuhu chơi đi có thưởng á');
  alert('dĩnh biệc');
}
  } else {
        alert('................')
        alert('Tui sẽ cố gắng hơn nữa!');
        alert('I love you');
        alert('Good bye');
        var input = prompt('Chơi một trò chơi hem? Nhập 1 nếu tiếp tục hoặc 2 nếu khum');

if (input === "1") {
  alert('Lét gôooooooo');
  var kDay = prompt('Nhập ngày sinh của tui');
  var kMonth = prompt('Nhập tháng sinh của tui');
  var kYear = prompt('Nhập năm sinh của tui');
  if(kDay == 22 && kMonth==8 && kYear==2008){
    var randomNum = Math.floor(Math.random() * 100) + 1;
var message = "Chúc mừng bạn đã nhận đc " + randomNum + "k! vì trả lời đúng. Hãy cap màn hình và gửi cho tôi đi";
alert(message);
  }else{
    alert("chia buốn bạn đã sai rùi!! hahahahha")
    console.log("Kết thúc chương trình");
  }
 } else if (input === "2") {
  alert('huhuhu chơi đi có thưởng á');
  alert('dĩnh biệc');
  console.log("Kết thúc chương trình");
}
        
      }
    } else {
      console.error(loiXacthuc);
      alert('Quá trình xác thực gặp lỗi do thông tin không chính xác hoặc lỗi hệ thống. Vui lòng tải lại trang và thử lại');
    }
  } else {
    console.error(loiXacthuc);
    alert('Quá trình xác thực gặp lỗi do thông tin không chính xác hoặc lỗi hệ thống. Vui lòng tải lại trang và thử lại');
  }
} else {
  console.error(loiXacthuc);
  alert('Quá trình xác thực gặp lỗi do thông tin không chính xác hoặc lỗi hệ thống. Vui lòng tải lại trang và thử lại');
}
