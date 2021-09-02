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
}

let tambahData = new Siswa('farhan', '1234', 'Fiqh');
tambahData.gabung()