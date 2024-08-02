function cekKhodam(e) {
  e.preventDefault();
  let nama = $("#search").val();

  if (nama === "") {
    alert("Nama tidak boleh kosong.!");
  } else {
    let status = ["isi", "kosong"];

    const randomStatus = Math.floor(Math.random() * status.length);
    if (randomStatus == 0) {
      let khodam = [
        "Mio Karbu",
        "Kuntilanak",
        "Kosong",
        "Tuyul Gondrong",
        "Harimau Botak",
        "Ajing Rabies",
        "Kakek Sugiono",
        "Macan Kumbang",
        "Singa Botak",
        "Nyi Roro Kidul",
        "Jenglot Jantan",
        "Genderuwo",
        "Wewe Gombel",
        "Pocong Kelana",
        "Sundel Bolong",
        "Leak Bali",
        "Kolong Wewe",
        "Tuyul Kembar",
        "Macan Putih",
        "Babi Ngepet",
        "Jembalang Tanah",
        "Banaspati",
        "Siluman Ular",
        "Monyet Ijo",
        "Buto Ijo",
        "Prabu Siliwangi",
        "Nyi Blorong",
        "Eyang Semar",
        "Nyi Pelet",
        "Mak Lampir",
        "Suster Ngesot",
        "Hantu Jeruk Purut",
        "Kolor Ijo",
        "Sundel Pati",
        "Hantu Air",
        "Kuyang",
        "Arwah Gentayangan",
        "Begu Ganjang",
        "Banaspati Merah",
        "Kalong Wewe",
        "Lelembut",
        "Pangeran Diponegoro",
        "Nyai Ontosoroh",
        "Ratu Pantai Selatan",
        "Siluman Buaya",
        "Nyi Blorong Emas",
        "Palasik",
        "Datuk Maringgih",
        "Antu Banyu",
        "Siluman Harimau",
        "Barong Bali",
        "Raja Pakuan",
        "Kyai Slamet",
        "Sang Hyang Seri",
        "Dewi Sri",
        "Siliwangi",
        "Gatotkaca",
        "Jaka Tarub",
        "Ki Joko Bodo",
        "Bagong",
        "Petruk",
        "Gareng",
        "Anoman",
        "Loro Kidul",
        "Kelana Swandana",
        "Kamandanu",
        "Wiro Sableng",
        "Bujang Ganong",
        "Tumenggung Wiraguna",
        "Ki Ageng Kutu",
        "Prabu Angling Dharma",
        "Si Manis Jembatan Ancol",
        "Sengkuni",
        "Yuyu Kangkang",
        "Barong Landung",
        "Rangda",
        "Pangeran Samudra",
        "Hantu Rumah Tua",
        "Bidadari",
        "Nyai Dasima",
        "Siti Nurbaya",
        "Sangkuriang",
        "Dayang Sumbi",
        "Ratu Boko",
        "Jaka Sembung",
        "Ki Lurah Semar",
        "Dewi Anjani",
        "Roro Jonggrang",
        "Cindelaras",
        "Ken Arok",
        "Ken Dedes",
        "Damar Wulan",
        "Menak Jinggo",
        "Jayabaya",
        "Nyi Roro Mendut",
        "Satria Piningit",
        "Naga Bonar",
        "Pangeran Dipanegara",
        "Patih Gajah Mada",
        "Dewi Sekartaji",
      ];
      const random = Math.floor(Math.random() * khodam.length);
      $("#result").html(`${nama.toUpperCase()} - Khodam Kamu (${khodam[random]})`);
      $("#search").val("");
    } else {
      $("#result").html(`${nama.toUpperCase()} -Kamu ga punya khodam`);
      $("#search").val("");
    }
  }
}

$(document).ready(function () {
  $("#btn_search").click(cekKhodam);
});
