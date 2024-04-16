import './ccreatetodo.css';
import {useState} from 'react';
export function CreateTodo()
{
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div class="outer">
        <div class="form-container">
            <div class="form">
                <div class="form-group">
                    <label for="email">Title</label>
                    <input required="" name="email" id="email" type="text" onChange={function(e){
                        const value = e.target.value;
                        setTitle(value);
                    }}></input>
                </div>
                <div class="form-group">
                    <label for="textarea">Description</label>
                    <textarea required="" cols="50" rows="10" id="textarea" name="textarea"  onChange={function(e){
                        const value = e.target.value;
                        setDescription(value);
                    }}> </textarea>
                </div>
                <button type="submit" class="form-submit-btn" onClick={() => {
                    fetch("http://localhost:3000/todos", {
                        method:"POST",
                        body:JSON.stringify(
                        {
                            title:title,
                            description:description
                        }),
                        headers:
                        {
                            "Content-Type":"application/json"
                        }
                    }).then(async (res) => {
                        const json = await res.json();
                        console.log(json);
                        alert("todo created");
                    })
                }}>Add todo</button>
            </div>
        </div>
    </div>
}