import React, { Component } from "react"
import "./Lists.css"
import Time from '../Tugas12/tugas12';

class Lists extends Component {

    constructor(props) {
        super(props)
        this.state = {
            daftabuah: [
                { nama: "Semangka", harga: 10000, berat: 1000 },
                { nama: "Anggur", harga: 40000, berat: 500 },
                { nama: "Strawberry", harga: 30000, berat: 400 },
                { nama: "Jeruk", harga: 30000, berat: 1000 },
                { nama: "Mangga", harga: 30000, berat: 500 }
            ],
            input: {
                inputnama: "",
                inputharga: "",
                inputberat: ""
            },
            indexOfForm: -1
        }

        this.handlenamaChange = this.handlenamaChange.bind(this);
        this.handlehargaChange = this.handlehargaChange.bind(this);
        this.handleberatChange = this.handleberatChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handlenamaChange(event) {
        this.setState({
            input: event.target.value
        });
    }
    handlehargaChange(event) {
        this.setState({
            input: event.target.value
        });
    }
    handleberatChange(event) {
        this.setState({
            input: event.target.value
        });
    }


    handleDelete(event) {
        let index = event.target.value
        let newDaftarbuah = this.state.daftabuah
        let editedbuah = newDaftarbuah[this.state.indexOfForm]
        newDaftarbuah.splice(index, 1)

        if (editedbuah !== undefined) {
            // array findIndex baru ada di ES6
            var newIndex = newDaftarbuah.findIndex((el) => el === editedbuah)
            this.setState({ daftabuah: newDaftarbuah, indexOfForm: newIndex })

        } else {

            this.setState({ daftabuah: newDaftarbuah })
        }

    }

    handleSubmit(event) {
        event.preventDefault()

        this.setState({
            daftabuah: [...this.state.daftabuah, this.state.input],
            daftabuah: [...this.state.daftabuah, this.state.input],
            daftabuah: [...this.state.daftabuah, this.state.input],
            input: {
                inputnama: "",
                inputharga: "",
                inputberat: ""
            }
        })
    }



    handleEdit(event) {
        let index = event.target.value
        let buah = this.state.daftabuah[index]
        this.setState({
            input: {
                inputnama: buah.nama,
                inputharga: buah.harga,
                inputberat: buah.berat
            }, indexOfForm: index
        })
    }

    // handleSubmit(event) {
    //     // menahan submit
    //     event.preventDefault()
    //     let input = this.state.input
    //     if (input['inputnama'].replace(/\s/g, '') !== "" && input['inputharga'].toString.replace(/\s/g, '') !== "" && input['inputberat'].toString.replace(/\s/g, '') !== "") {
    //         let newDaftarbuah = this.state.daftabuah
    //         let index = this.state.indexOfForm
    //         index === -1 ? newDaftarbuah = [...newDaftarbuah, input] : newDaftarbuah[index] = input
    //         this.setState({
    //             daftabuah: [newDaftarbuah, input: { inputnama: " ", inputharga: " ", inputbuah: "", }, indexOfForm: -1
    //         })
    //     }

    // }






    render() {
        return (
            <>
                <h1>Daftar Buah</h1>
                <form onSubmit={this.handleSubmit}>
                    <label> Nama buah: </label>
                    <input type="text" name="inputnama" value={this.state.input.inputnama} onChange={this.handlenamaChange} />&emsp;
                    <label>Harga Buah: </label>
                    <input type="text" name="inputharga" value={this.state.input.inputharga} onChange={this.handlehargaChange} />&emsp;
                    <label>Berat Buah </label>
                    <input type="text" name="inputberat" value={this.state.input.inputberat} onChange={this.handleberatChange} />&emsp;
                    <button>submit</button>
                </form>
                <br></br>

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>nama</th>
                            <th>harga</th>
                            <th>berat</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            this.state.daftabuah.map((val, index) => {
                                return (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{val.nama}</td>
                                        <td>{val.harga}</td>
                                        <td>{val.berat / 1000} Kg</td>
                                        <td><button onClick={this.handleEdit} value={index}>Edit</button> &nbsp;
                                        <button onClick={this.handleDelete} value={index}>Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <Time />
                {/* Form */}


            </>
        )
    }
}

export default Lists
