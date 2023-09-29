import io from "socket.io-client";

const socketClient = io("/")

const App = () => {
  return (
    <div>conectado</div>
  )
}

export default App