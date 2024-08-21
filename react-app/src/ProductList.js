import { Table } from "react-bootstrap";
import Header from "./Header";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductList() {
    const [data, setData] = useState([]);
    const ab = async () => {
        let result = await fetch("http://127.0.0.1:8000/api/list");
        result = await result.json();
        setData(result)
        // console.warn("data", data);
    };

    useEffect(() => {
        ab()
        getData()
    }, []);

    async function deleteOpreation(id)
    {
        let result = await fetch("http://127.0.0.1:8000/api/delete/" + id,{
            method: 'DELETE'
        });
        result = await result.json();
        console.warn(result)
        getData()
    }

    async function getData()
    {
        let result = await fetch("http://127.0.0.1:8000/api/list");
        result = await result.json();
        setData(result)
    }
    return (
        <div>
            <Header />
            <h1>Product List</h1>
            <div className='col-sm-8 offset-sm-2'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Product Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th>Action</th>
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
                                    <td><span onClick={() => deleteOpreation(item.id)} className="delete">Delete</span>
                                    <Link to={"update/" + item.id}>
                                        <span className="update">Update</span>
                                    </Link>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default ProductList