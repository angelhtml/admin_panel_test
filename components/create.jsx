import React, {useState} from "react";
import axios from "axios";
function Create(){
    const [input, setInput] = useState({
        title: '',
        content: ''
    })

    function handleChange(event) {
        const {name, value} = event.target;

        setInput(prevInput => {
            return{
                ...prevInput,
                [name]: value
            }
        })
    }
    function handleClick(event) {
        event.preventDefault();
        axios({
            method: 'post',
            url: 'http://localhost:3001/create',
            data: {
                title: input.title,
                content: input.content
            }
          }).then(function (response) {
              console.log(response);
              alert('success')
            })
            .catch(function (error) {
              console.log(error);
            });
    }
    return(
        <div>
            <input name='title' value={input.title} autoComplete='off' placeholder='note title' onChange={handleChange}/><br />
            <textarea name='content' value={input.content} autoComplete='off' placeholder='note content' onChange={handleChange}/><br />
            <button onClick={handleClick}>add</button>
        </div>
    )
}
export default Create;