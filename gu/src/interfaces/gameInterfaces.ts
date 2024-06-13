import { ReactNode } from "react";

export interface PartyCreationProps {
    onClose: () => void;
    children?: ReactNode;
    title?: string;
}

export interface GameViewerProps {
    partyName: string,
    partyId: string
}

