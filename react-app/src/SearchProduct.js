import Header from './Header'
import { useState } from 'react'
import { Table } from "react-bootstrap";

function SearchComponent() {
    const [data, setData] = useState([]);
    async function search(key) {
        if (key.length > 1) {
            let result = await fetch("http://127.0.0.1:8000/api/search/" + key)
            result = await result.json();
            console.warn(result);
            setData(result)
        }
    }
    return (
        <div>
            <Header />
            <div className='col-sm-6 offset-sm-3'>
                <h1>Search Component</h1>
                <br></br>
                <input type='text' onChange={(e) => search(e.target.value)} className='form-control' placeholder='Search Product' />
                <br></br>
                {
                    data.length > 0 ?
                        <div className=''>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Product Name</th>
                                        <th>Description</th>
                                        <th>Price</th>
                                        <th>Image</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((item) =>
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.description}</td>
                                                <td>{item.price}</td>
                                                <td><img style={{ width: 150 }} src={"http://127.0.0.1:8000/" + item.file_path} /></td>
                                            </tr>)
                                    }
                                </tbody>
                            </Table>
                        </div>
                        : <h2>Search Product</h2>
                }
            </div>
        </div>
    )
}

export default SearchComponent