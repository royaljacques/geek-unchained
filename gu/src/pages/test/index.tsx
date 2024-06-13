import Config from "@/interfaces/configInterface";
import { useEffect, useState } from "react"

export default function Test() {
    const [ws, setWs] = useState<WebSocket | null>(null);
    const websocket = () => {
        const socket = new WebSocket(Config.WebSocketUrl);

        socket.onopen = () => {
            console.log('WebSocket connection opened');
        };

        socket.onmessage = (event) => {
            console.log('Received message:', event.data);

        };

        socket.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        socket.onclose = () => {
            console.log('WebSocket connection closed');
        };

        setWs(socket);
        return () => {
            socket.close();
        };
    }
    function click() {
        if (ws != null) ws.send("salut")
    }

    useEffect(() => {
        websocket()
    }, [])
    return (
        <div>
            <button onClick={click}>clique ici</button>
        </div>
    )
}