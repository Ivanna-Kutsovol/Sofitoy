import { StaticImageData } from "next/image";

export interface SlideObjectInterface {
    [x: string]: any;
    rating: number;
    author: string;
    date: string;
    comment: string;
}

export interface ButtonProps {
    text?: string | undefined
    onClick?: any | undefined
    burgerImg?: string | StaticImageData
    alt?: string | undefined
    className?: string
    type: "button" | "submit"
}