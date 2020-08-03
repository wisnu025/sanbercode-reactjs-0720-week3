import React from 'react';
import '../App.css';


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

class Nama extends React.Component {
    render() {
        return <p> {this.props.nama}</p>;
    }
}

class Harga extends React.Component {
    render() {
        return <p> {this.props.harga}</p>;
    }
}
class Berat extends React.Component {
    render() {
        let kg = 1000
        return <p> {this.props.berat / kg + " Kg"}</p>;
    }
}


class Isi extends React.Component {
    render() {
        return (
            dataHargaBuah.map(el => {
                return (
                    <tr >
                        <td><Nama nama={el.nama} /></td>
                        <td><Harga harga={el.harga} /></td>
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