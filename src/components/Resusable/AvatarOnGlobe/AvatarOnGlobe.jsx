import LazyImage from "../LazyImage/LazyImage";
import SunglassEmoji from "../../../assets/emoji/sunglasses.png";
import HeartEmoji from "../../../assets/emoji/heart.png";
import HappyEmoji from "../../../assets/emoji/happy_face.png";
import { avatars } from "../../../constants/common";

const AvatarOnGlobe = () => {
    const avatarCount = avatars.length;

    const globeRadius = {
        default: 192,
        sm: 50,
        md: 120,
    };

    const gap = {
        default: 20,
        sm: 15,
        md: 10,
    };

    const avatarRadius = {
        default: 30,
        sm: 24,
        md: 20,
    };

    const calculateCircleRadius = (globeSize, gapSize, avatarSize) =>
        globeSize + gapSize + avatarSize;

    return (
        <div className="relative flex items-center justify-center mt-44 mb-24">
            {/* Globe Image */}
            <div className="relative">
                <img
                    src="https://cdn.pixabay.com/photo/2016/04/02/21/01/earth-1303628_1280.png"
                    alt="Globe"
                    className="w-96 h-96 rounded-full object-cover
                        sm:w-80 sm:h-80
                        md:w-64 md:h-64
                        lg:w-96 lg:h-96
                        xl:w-[24rem] xl:h-[24rem]"
                />
                <LazyImage
                    imageUrl={HappyEmoji}
                    imgStyles="w-12 h-12 absolute -left-14 top-0
                        sm:w-10 sm:h-10
                        md:w-8 md:h-8
                        lg:w-12 lg:h-12"
                    alt="happyEmoji"
                />
                <LazyImage
                    imageUrl={HeartEmoji}
                    imgStyles="w-12 h-12 absolute left-[50%] -top-[30%] rotate-[20deg]
                        sm:w-10 sm:h-10
                        md:w-8 md:h-8
                        lg:w-12 lg:h-12"
                    alt="heartEmoji"
                />
                <LazyImage
                    imageUrl={SunglassEmoji}
                    imgStyles="w-12 h-12 absolute -right-16 top-0
                        sm:w-10 sm:h-10
                        md:w-8 md:h-8
                        lg:w-12 lg:h-12"
                    alt="sunglassEmoji"
                />

                {/* Dotted Circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div
                        className="absolute rounded-full border-2 border-dashed border-green-400"
                        style={{
                            width: `${calculateCircleRadius(
                                globeRadius.default,
                                gap.default,
                                avatarRadius.default
                            ) * 2
                                }px`,
                            height: `${calculateCircleRadius(
                                globeRadius.default,
                                gap.default,
                                avatarRadius.default
                            ) * 2
                                }px`,
                        }}
                    ></div>
                </div>

                {/* User Avatars */}
                {avatars.map((avatar, index) => {
                    const angle = (index / avatarCount) * 360;

                    return (
                        <div
                            key={`avatar${avatar.id}`}
                            className="absolute rounded-full border-2 border-white"
                            style={{
                                width: `${avatarRadius.default * 2}px`,
                                height: `${avatarRadius.default * 2}px`,
                                top: `calc(50% + ${calculateCircleRadius(
                                    globeRadius.default,
                                    gap.default,
                                    avatarRadius.default
                                ) * Math.sin((angle * Math.PI) / 180)
                                    }px - ${avatarRadius.default}px)`,
                                left: `calc(50% + ${calculateCircleRadius(
                                    globeRadius.default,
                                    gap.default,
                                    avatarRadius.default
                                ) * Math.cos((angle * Math.PI) / 180)
                                    }px - ${avatarRadius.default}px)`,
                            }}
                        >
                            <img
                                src={avatar.src}
                                alt={avatar.alt}
                                className="w-full h-full rounded-full"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AvatarOnGlobe;
