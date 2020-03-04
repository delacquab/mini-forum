import React, { useEffect, useState } from "react";
import { getAll } from "../../services/api";
import Thread from "../../components/Thread";

import '../../components/folhaestilo.css'

function Home() {
  const [thread, setThread] = useState([]);

  useEffect(() => {
    getAll()
      .then(json => setThread(json.data))
      .catch(e => console.log("erro"));
  }, []);

  return (
    <div className="estilodiv">
        {thread.map(t => {
          return <Thread thread={t}></Thread>;
        })}   
    </div>
  );
}

export default Home;
