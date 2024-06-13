import Config from "@/interfaces/configInterface";
import { GameViewerProps } from "@/interfaces/gameInterfaces";
import { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";


export default function partyViewer({ partyName, partyId }: GameViewerProps) {
    const [ws, setWs] = useState<WebSocket | null>(null);
    const [day, setDay] = useState(2);
    const [wolfImages, setWolfImages] = useState<React.ReactNode[]>([]);
    const [villagerImages, setVillagerImages] = useState<React.ReactNode[]>([])

    useEffect(() => {
        initConnection();
    }, [])
    async function initConnection() {
        const socket = new WebSocket(`${Config.WebSocketUrl}?${partyId}`)
    }
    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.titleDiv}`}>
                <div className={styles.titleDay}>JOURS {day}</div>
            </div>
            <div className={`${styles.imgTabler}`}>
                <div className={`${styles.tabler1}`}>
                    <h1 className={`${styles.text}`}>LOUPS-GAROUS</h1>
                    <div>{wolfImages}</div>
                </div>
                <div className={`${styles.tabler2}`}>
                    <h1 className={`${styles.text}`}>VILLAGEOIS</h1>
                </div>
            </div>
        </div>
    )
} 