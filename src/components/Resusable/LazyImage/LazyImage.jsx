import { useState } from "react";
import DefaultImg from "../../../assets/images/default_avatar.webp";

const LazyImage = ({
    fallBackIcon,
    imageUrl,
    imgStyles,
    alt,
    fallbackStyle,
}) => {
    const [imgSrc, setImgSrc] = useState(imageUrl);
    return (
        <>
            {imgSrc ? (
                <img
                    src={imgSrc}
                    className={imgStyles}
                    alt={alt}
                    onError={() => setImgSrc(null)}
                />
            ) : fallBackIcon ? (
                fallBackIcon
            ) : (
                <img
                    src={DefaultImg}
                    className={`w-16 h-16 ${fallbackStyle}`}
                    alt="defaultImage"
                />
            )}
        </>
    );
};

export default LazyImage;
