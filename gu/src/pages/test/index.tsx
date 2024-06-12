import { useEffect } from "react"

export default function Test(){
    const websocket = () => {
        const ws = new WebSocket("https://fantastic-train-pwx9w4wg5vw2rr6j-8080.app.github.dev/websocket")
        ws.onmessage = (event) => {
            const message = JSON.parse(event.data);
            console.log(message)
        }
    }
    useEffect(() => {
        websocket()
    })
    return (
        <h1>test Page</h1>
    )
}