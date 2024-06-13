import PartyCreation from "@/components/partyCreation";
import { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css"; // Assurez-vous que le chemin est correct

export default function Dashboard() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className={styles.containerIndex}>
            <button className={styles.buttonIndex} onClick={() => setShowModal(true)}>crée une partie</button>
            <button className={styles.buttonIndex}>groupe 1</button>
            <button className={styles.buttonIndex}>groupe 2</button>
            {showModal &&
                <PartyCreation onClose={() => setShowModal(false)} title={"création d'une partie"} />

            }
        </div>
    );
}
