import Arrow from "../../Icons/Arrow";
import BlurDiv from "../BlurDiv/BlurDiv";
import Button from "../Button/Button";
import Card from "../Card/Card";
import LazyImage from "../LazyImage/LazyImage";
import { cardData, introHeader, introImages } from "../../../constants/common";
import SparckleImage from "../../../assets/images/sparkles.png";

export const SectionHeader = ({
    heading1,
    heading2,
    children,
    containerStyle,
    heading1Style,
    heading2Style,
}) => {
    return (
        <div
            className={`max-w-[1381] my-10 m-auto flex justify-center items-center flex-col gap-10 ${containerStyle}`}
        >
            <>
                <div className="text-center">
                    {heading1.map((header, i) => (
                        <h1 key={`header${i}`} className={`font-nohemi ${heading1Style}`}>
                            {header}
                        </h1>
                    ))}
                </div>
                <p className={`text-center max-w-2xl ${heading2Style}`}>{heading2}</p>
            </>
            {children}
        </div>
    );
};

const Intro = () => {
    return (
        <section className="bg-blue-950 min-h-screen w-full bg-cover bg-center text-white p-10">
            {/* Intor Heading */}
            <SectionHeader
                heading1={introHeader.heading1}
                heading2={introHeader.heading2}
                heading1Style="text-5xl uppercase mb-8 gradient-text"
            >
                <Button
                    text="Coming soon"
                    containerStyle="bg-violet-500"
                    rightIcon={
                        <div className="ml-2 w-6 h-6 bg-white rounded-full">
                            <Arrow className="fill-transparent stroke-violet-500 w-6 h-6 rotate-180" />
                        </div>
                    }
                />
            </SectionHeader>

            {/* Intro Floating Images */}
            <div className="flex justify-evenly items-center relative p-4 mt-10 h-[30vh] overflow-hidden">
                {introImages.map((image) => {
                    const { id, url, className } = image;
                    return (
                        <div key={`introimage${id}`} className={`bg-cover ${className}`}>
                            <img
                                src={url}
                                alt={`introimage${id}`}
                                className="max-h-24 w-full rounded-lg object-cover"
                            />
                        </div>
                    );
                })}
            </div>

            {/* Cards */}
            <div className="flex justify-center flex-wrap gap-10">
                {cardData.map((singleCard, i) => (
                    <>
                        <Card
                            key={`card0${i}`}
                            containerStyle="w-[606px] relative max-h-[217px] bg-white bg-violet-500 flex flex-col justify-evenly z-10"
                            cardHeader={
                                <div className="flex justify-between text-black">
                                    <p className="text-[32px]">
                                        {singleCard.title}
                                        {singleCard.subtitle ? (
                                            <span className="text-base">{singleCard.subtitle}</span>
                                        ) : null}
                                    </p>
                                    <div className="ml-2 w-6 h-6 bg-white rounded-full">
                                        <LazyImage
                                            imageUrl={SparckleImage}
                                            imgStyles="w-6 h-6"
                                            alt="sparcleImage"
                                        />
                                    </div>
                                </div>
                            }
                            cardFooter={
                                <div className="text-[86px] text-black">
                                    {singleCard.number}
                                </div>
                            }
                        />
                        <BlurDiv containerStyle="sticky z-10 bottom-0" />
                    </>
                ))}
            </div>
        </section>
    );
};

export default Intro;
