import axios from "axios";
import { useEffect, useState } from "react";
function Updatedata() {
    const [notesData, setnotesData] = useState({
        title: "",
        content: ""
    })
    let _id;
    useEffect(() => {
        _id = window.location.href.split("update/")[1];
    })
    const updatedataChange = (e) => {
        setnotesData({
            ...notesData,
            [e.target.name]: e.target.value
        })
    }
    const updateNotes = async () => {
        await axios.put(`http://localhost:5000/notes/${_id}`, notesData)
            .then((response) => {
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            })
    }
    return (
        <>
            title:
            <input type={"text"} name={'title'} value={notesData.title} onChange={updatedataChange} required /><br />
            content:
            <input type={"text"} name={'content'} value={notesData.content} onChange={updatedataChange} required /><br />
            <button onClick={updateNotes}>update</button>
        </>
    );
}

export default Updatedata;