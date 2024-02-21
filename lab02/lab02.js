function getDate() {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1; // Tháng bắt đầu từ 0 nên cần cộng thêm 1
    var year = currentDate.getFullYear();
  
    var formattedDate = day + '/' + month + '/' + year;
    return formattedDate;
  }