module.exports = {
  timeConvert: function(time) {
     let newTime = new Date(time);
     let day = newTime.getDay();
     let date = newTime.getDate();
     let month = newTime.getMonth();
     let year = newTime.getFullYear();
     let hours = newTime.getHours();
     let rawMinutes = newTime.getMinutes();
     let minutes = "";
     if (String(rawMinutes).length === 1) {
       minutes = "0"+String(rawMinutes);
     } else {
       minutes = String(rawMinutes);
     }
     let days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
     let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
     return `${days[day]}, ${date}-${months[month]}-${year}`;
  },
  sisaWaktu : function(tanggalExp, tanggalSkrg) {
    let waktuExp = new Date(tanggalExp);
    let waktuSkrg = new Date(tanggalSkrg);
    let satuHari = 24*60*60*1000;
    let sisaWaktu = Math.round(Math.abs((waktuSkrg.getTime() - (waktuExp).getTime())/(satuHari)));
    if (waktuSkrg - waktuExp > 0) {
      sisaWaktu = - sisaWaktu;
    }
    return sisaWaktu;
  },
  checkStatus : function(sisaWaktu) {
    if (sisaWaktu <= 0) {
      return "kadaluarsa";
    } else if (sisaWaktu <= 7) {
      return "akan kadaluarsa";
    } else {
      return "aman";
    }
  },
  tanggalh7 : function(tanggalExp) {
    let exp = new Date(tanggalExp);
    let date = exp.getTime() - 1000*60*60*24*7;
    return exp.setTime(date);
  }
}
