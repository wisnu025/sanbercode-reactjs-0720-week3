import React from 'react';
import '../App.css';


let ubahkg = (kg) => {
    return kg = 1000;
}

let dataHargaBuah = [
    { nama: "Semangka", harga: 10000, berat: 1000 },
    { nama: "Anggur", harga: 40000, berat: 500 },
    { nama: "Strawberry", harga: 30000, berat: 400 },
    { nama: "Jeruk", harga: 30000, berat: 1000 },
    { nama: "Mangga", harga: 30000, berat: 500 }
]

class Judul extends React.Component {

    render() {
        return <tr>
            <th>Nama </th>
            <th>Harga</th>
            <th>Berat</th>
        </tr>
    }
}

class NamaHarga extends React.Component {

    render() {
        return <label> {this.props.nama}
            {this.props.harga}
        </label>

    }
}

class Berat extends React.Component {
    render() {
        return <label> {this.props.berat / ubahkg() + " Kg"}</label>;
    }
}



class Isi extends React.Component {
    render() {
        return (
            dataHargaBuah.map(el => {
                return (
                    <tr >
                        <td><NamaHarga nama={el.nama} /></td>
                        <td><NamaHarga harga={el.harga} /></td>
                        <td><Berat berat={el.berat} /></td>
                    </tr>
                )
            })

        )
    }
}


class DataUser extends React.Component {
    render() {
        return (

            <center>
                <h1>Tabel Harga Buah</h1>
                <table>
                    <Judul />
                    <Isi />
                </table>
            </center>
        )

    }
}

export default DataUser