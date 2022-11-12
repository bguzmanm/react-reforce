import React from "react";
import { collection, getDocs } from "firebase/firestore";

import { db } from './firebase';
import { ListMessage } from "./listMessage";
import { OneMessage } from "./oneMessage";

function Home() {
  const [messages, setMessages] = React.useState([]);

  React.useEffect(() => {
    try {
      const readData = async (coleccion) => {
        const data = await getDocs(collection(db, coleccion));
        const arrDocs = data.docs.map(doc => (doc.data()));
        setMessages(arrDocs);
      }

      readData('messages');
    } catch (error) {
      console.log(error);
    }
  }, []);



  return (
    <ListMessage>
      {
        messages.map(mensaje => (
          <div>
            <OneMessage
              user={mensaje.user}
              message_text={mensaje.message_text} />
          </div>
        ))
      }
    </ListMessage>
  )
}

export { Home };