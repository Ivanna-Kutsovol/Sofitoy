import Image from "next/image";
import {ButtonProps} from "../../../app/interfaces/interfases"

const Button = ({ text, onClick, burgerImg, alt, className, type }: ButtonProps): JSX.Element => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={className}
        >
            {text}
            {burgerImg && (
                <Image
                    src={burgerImg!}
                    alt={alt!}
                    priority={true}
                />
            )}
        </button>
    )
}

export default Button;