import { MouseEventHandler, ReactNode, useEffect, useState, useCallback } from "react";
import styles from "@/styles/Home.module.css";
import Config from "@/interfaces/configInterface";

interface PartyCreationProps {
    onClose: () => void;
    children?: ReactNode;
    title?: string;
}

interface Card {
    name: string;
    imagePath: string;
}

export default function PartyCreation({ onClose, children, title }: PartyCreationProps) {
    const [view, setView] = useState<ReactNode[]>([]);
    const [selectedCards, setSelectedCards] = useState<{ [key: number]: boolean }>({});

    const handleCloseClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
        e.preventDefault();
        onClose();
    };

    const handleCheckboxChange = useCallback((key: string) => {
        const intKey = parseInt(key);
        setSelectedCards((prev) => ({
            ...prev,
            [intKey]: !prev[intKey],
        }));
    }, []);

    async function createView() {
        try {
            const result: { [key: string]: Card } = await (await fetch(Config.apiUrl + "/config/json/cardsIndex.json")).json();

            const newView = Object.keys(result).map((key) => {
                const card = result[key];
                const imageUrl = `${Config.apiUrl}/public/assets/${card.imagePath}`;
                const intKey = parseInt(key);

                return (
                    <div key={intKey} className={styles.cardItem}>
                        <img src={imageUrl} alt={card.name} className={styles.cardImage} />
                        <div className={styles.checkboxContainer}>
                            <input
                                type="checkbox"
                                id={`card-${intKey}`}
                                onChange={() => handleCheckboxChange(key)}
                            />
                            <label htmlFor={`card-${intKey}`} className={styles.cardLabel}>
                                {card.name}
                            </label>
                        </div>
                    </div>
                );
            });

            setView(newView);
        } catch (error) {
            console.error("Error fetching or processing data:", error);
        }
    }

    const handleValidation = () => {
        const activeCards = Object.keys(selectedCards).filter((key) => selectedCards[parseInt(key)]);
        console.log("Active cards:", activeCards);
    };

    useEffect(() => {
        createView();
    }, []);

    return (
        <div className={`${styles.modalOverlay}`}>
            <div className={`${styles.modalWrapper}`}>
                <div className={`${styles.modal}`}>
                    <div className={`${styles.modalHeader}`} >
                        <a href="#" onClick={handleCloseClick}>
                            x
                        </a>
                    </div>
                    {title && <h1>{title}</h1>}
                    <div className={`${styles.modalBody}`}>{view}</div>
                    <div className={`${styles.modalFooter}`}>
                        <button onClick={handleValidation}>Valider</button>
                    </div>
                </div>
            </div>
        </div >
    );
}
