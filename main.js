const data = document.getElementById('data')


class Siswa {
    constructor(username, password, namaKelas) {
        this.username = username;
        this.password = password;
        this.namaKelas = namaKelas;
    }

    gabung() {
        console.log(this.username + " Telah bergabung pada kelas " + this.namaKelas);
    }
    member() {
        console.log('100 member');
    }
}

// let tambahData = new Siswa('farhan', '1234', 'Fiqh');
// tambahData.gabung()

class Lagganan extends Siswa {
    constructor(username, paket) {
        super(username);
        this.paket = paket;
    }

    gabungPaket() {
        console.log('Hi ' + this.username + ' telah bergabung paket ' + this.paket);
    }
}

let tambahLangganan = new Lagganan('farhan', 'premium');
tambahLangganan.member()