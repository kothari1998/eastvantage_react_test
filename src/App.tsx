import React, { useEffect, useState } from "react";
import axios from "axios";

const App = ()=>{
  //use state
  const [data, setData] = useState<any[]>([])
  useEffect(() => {
    fetchData();
  });

  //get the name and email
  const fetchData = async () =>{
    try {
      const {data: response} = await axios.get('https://randomuser.me/api');
      //data
      setData(response.results);
      console.log(data);
      
      //save data in localStorage
      localStorage.setItem('items', JSON.stringify(data));
    } catch (error) {
      console.error();
    }
  }

  const refreshPage = ()=>{
    // window.location.reload(false);
    fetchData();
  }
 
  return(
    
    <table className="table">
        <thead>
            <tr>
                <th>S.N</th>
                <th>Full Name</th>
                <th>Email Address</th>
             </tr>
        </thead>
        <tbody>
        {
            data.map((item, index)=>{
                return(
                    <tr key={index}>
                        <td>{index+1}</td>
                         <td>{item.name.title}{item.name.first}{item.name.last}</td>
                        <td>{item.email}</td>
                     </tr>
                )
            })
        }
        </tbody>
        <div>
       <button onClick={refreshPage}>Refresh</button>
    </div>
    </table>
    
)
     
};


export default App;
