// Kalender
var now = new Date();
var dname = now.getDay(),
    mo = now.getMonth(),
    dnum = now.getDate(),
    yr = now.getFullYear();

var months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
var week = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
var ids = ["hari", "tanggal", "bulan", "tahun"];
var values = [week[dname], dnum, months[mo], yr];
for (var i = 0; i < ids.length; i++) document.getElementById(ids[i]).firstChild.nodeValue = values[i];

// Jam
// var hour = document.getElementById("jam");
// var minute = document.getElementById("menit");
// var seconds = document.getElementById("detik");
var jam = document.getElementById('jam');

var clock = setInterval(
    function time() {
        var now = new Date();
        var hr = now.getHours();
        var min = now.getMinutes();
        var sec = now.getSeconds();

        if (hr < 10) {
            hr = "0" + hr;
        }

        if (min < 10) {
            min = "0" + min;
        }

        if (sec < 10) {
            sec = "0" + sec;
        }

        // if (hr >= 3) {
        //     document.getElementById("waktu").innerHTML = "Selamat Pagi";
        //     document.getElementById("absent").style.display = "none";
        // }

        // if (hr >= 6) {
        //     document.getElementById("absent").style.display = "";
        // }

        // if (hr >= 8) {
        //     document.getElementById("absent").style.display = "none";
        // }
        // if (hr >= 11) {
        //     document.getElementById("waktu").innerHTML = "Selamat Siang";
        //     document.getElementById("absent").style.display = "none";
        // }

        // if (hr >= 15) {
        //     document.getElementById("waktu").innerHTML = "Selamat Sore";
        //     document.getElementById("absent").style.display = "none";
        // }

        // if (hr >= 19) {
        //     document.getElementById("waktu").innerHTML = "Selamat Malam";
        //     document.getElementById("absent").style.display = "none";
        // }

        if (week[dname] == 'Sabtu') {

            if (hr >= 3) {
                document.getElementById("waktu").innerHTML = "Hi, selamat pagi";
            }

            if (hr >= 11) {
                document.getElementById("waktu").innerHTML = "Hi, selamat siang";
            }

            if (hr >= 15) {
                document.getElementById("waktu").innerHTML = "Hi, selamat sore";
            }

            if (hr >= 19) {
                document.getElementById("waktu").innerHTML = "Hi, selamat malam";
            }
        } else if (week[dname] == 'Minggu') {

            if (hr >= 3) {
                document.getElementById("waktu").innerHTML = "Hi, selamat pagi";
            }

            if (hr >= 11) {
                document.getElementById("waktu").innerHTML = "Hi, selamat siang";
            }

            if (hr >= 15) {
                document.getElementById("waktu").innerHTML = "Hi, selamat sore";
            }

            if (hr >= 19) {
                document.getElementById("waktu").innerHTML = "Hi, selamat malam";
            }
        } else {

            if (hr >= 3) {
                document.getElementById("waktu").innerHTML = "Hi, selamat pagi";
            }

            if (hr >= 11) {
                document.getElementById("waktu").innerHTML = "Hi, selamat siang";
            }

            if (hr >= 15) {
                document.getElementById("waktu").innerHTML = "Hi, selamat sore";
            }

            if (hr >= 19) {
                document.getElementById("waktu").innerHTML = "Hi, selamat malam";
            }
        }


        // hour.textContent = hr;
        // minute.textContent = min;
        // seconds.textContent = sec;

        jam.textContent = hr + ' : ' + min + ' : ' + sec

    }, 1000
);

const senin = document.getElementById('senin');
const selasa = document.getElementById('selasa');
const rabu = document.getElementById('rabu');
const kamis = document.getElementById('kamis');
const jumat = document.getElementById('jumat');

if (week[dname] == 'Senin') {
    senin.style.display = '';
    selasa.style.display = 'none';
    rabu.style.display = 'none';
    kamis.style.display = 'none';
    jumat.style.display = 'none';
    kamis.style.display = 'none';
    jumat.style.display = 'none';
} else if (week[dname] == 'Selasa') {
    senin.style.display = 'none'
    selasa.style.display = '';
    rabu.style.display = 'none';
    kamis.style.display = 'none';
    jumat.style.display = 'none';
} else if (week[dname] == 'Rabu') {
    senin.style.display = 'none'
    selasa.style.display = 'none'
    rabu.style.display = '';
    kamis.style.display = 'none';
    jumat.style.display = 'none';
} else if (week[dname] == 'Kamis') {
    senin.style.display = 'none'
    selasa.style.display = 'none'
    rabu.style.display = 'none'
    kamis.style.display = '';
    jumat.style.display = 'none';
} else if (week[dname] == "Jum'at") {
    senin.style.display = 'none'
    selasa.style.display = 'none'
    kamis.style.display = 'none'
    rabu.style.display = 'none';
    kamis.style.display = 'none';
    jumat.style.display = '';
}  else {
    senin.style.display = 'none';
    selasa.style.display = 'none';
    rabu.style.display = 'none';
    kamis.style.display = 'none';
    jumat.style.display = 'none';
}

var countDateUtbk= new Date('May 17 2022 24:00:00').getTime();
let utbk = document.getElementById('utbk');
let utbk2 = document.getElementById('utbk2');
var a = setInterval(function () {
    var now = new Date().getTime();
    gap = countDateUtbk - now

    var detik = 1000;
    var menit = detik * 60;
    var jam = menit * 60;
    var hari = jam * 24;

    var h = Math.floor(gap / (hari));
    var j = Math.floor((gap % (hari)) / (jam));
    var m = Math.floor((gap % (jam)) / (menit));
    var d = Math.floor((gap % (menit) / (detik)));

    if (h < 10) {
        h = "0" + h;
    }
    if (j < 10) {
        j = "0" + j;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (d < 10) {
        d = "0" + d;
    }

    utbk.innerHTML = `UTBK ${h} Hari Lagi`;
    utbk2.innerHTML = `UTBK ${h} Hari Lagi`;

}, 1000);