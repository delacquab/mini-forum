import React, { useEffect, useState } from "react";
import { getAll } from "../../services/api";
import Thread from "../../components/Thread";

function Home() {
  const [thread, setThread] = useState([]);

  useEffect(() => {
    getAll()
      .then(json => setThread(json.data))
      .catch(e => console.log("erro"));
  }, []);

  return (
    <div>
        <p>Home!2</p>
        {thread.map(t => {
          return <Thread thread={t}></Thread>;
        })}   
    </div>
  );
}

export default Home;
