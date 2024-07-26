import { useEffect, useState } from "react";
import axios from "axios";

function Notes(){
    const [Title, setTitle] = useState()
    const [Content, setContent] = useState()
    const [Loading, setLoading] = useState(false)
    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:3001/notes',
          }).then(function (response) {
              console.log(response.data.title)
              response.data.map(note=>{ setTitle(note.title)} )
              response.data.map(note=>{ setContent(note.content)} )
            setLoading(true)
            })
            .catch(function (error) {
              console.log(error);
            });
    })
    return(
        <div>notes
        {Loading &&<>
        <h1>{Title}</h1>
        <h4>{Content}</h4>
        </>
}
        </div>
    )
}
export default Notes;