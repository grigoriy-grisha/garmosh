"use client";

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from "react";
import { Lightbox } from "./Lightbox";

interface LightboxContextValue {
	openLightbox: (images: string[], startIndex?: number, imageAlt?: string) => void;
	closeLightbox: () => void;
}

const LightboxContext = createContext<LightboxContextValue | undefined>(undefined);

export function useLightbox() {
	const context = useContext(LightboxContext);
	if (!context) {
		throw new Error("useLightbox must be used within LightboxProvider");
	}
	return context;
}

interface LightboxProviderProps {
	children: ReactNode;
}

export function LightboxProvider({ children }: LightboxProviderProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [images, setImages] = useState<string[]>([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [imageAlt, setImageAlt] = useState("");

	const openLightbox = useCallback((newImages: string[], startIndex: number = 0, alt: string = "") => {
		if (newImages.length === 0) return;
		setImages(newImages);
		setCurrentIndex(Math.max(0, Math.min(startIndex, newImages.length - 1)));
		setImageAlt(alt);
		setIsOpen(true);
	}, []);

	const closeLightbox = useCallback(() => {
		setIsOpen(false);
	}, []);

	useEffect(() => {
		if (isOpen) {
			document.documentElement.dataset.lightboxOpen = 'true';
		} else {
			delete document.documentElement.dataset.lightboxOpen;
		}
	}, [isOpen]);

	return (
		<LightboxContext.Provider value={{ openLightbox, closeLightbox }}>
			{children}
			<Lightbox 
				images={images} 
				currentIndex={currentIndex} 
				isOpen={isOpen} 
				onClose={closeLightbox}
				imageAlt={imageAlt}
			/>
		</LightboxContext.Provider>
	);
}

