import Arrow from "../../Icons/Arrow";
import Button from "../Button/Button";
import Card from "../Card/Card";
import { networkCardData, networkHeader } from "../../../constants/common";
import AvatarOnGlobe from "../AvatarOnGlobe/AvatarOnGlobe";
import { SectionHeader } from "../Intro/Intro";

/* Network Card */
const NetworkSection = () => {
    return (
        <div className="flex justify-center items-center flex-wrap gap-10 mt-44">
            {networkCardData.map((singleCard, i) => {
                const {
                    title,
                    subTitle,
                    cardStyle,
                    btn: { btnText, btnStyle, rightIcon },
                } = singleCard;
                return (
                    <>
                        <Card
                            key={`${i}networkCard00`}
                            containerStyle={`w-[392px] h-[256px] flex flex-col justify-evenly ${cardStyle}`}
                            cardHeader={
                                <div className="">
                                    <p className="text-[32px]">{title}</p>
                                </div>
                            }
                            cardBody={<p className="text-base py-2">{subTitle}</p>}
                            cardFooter={
                                <div className="flex justify-end">
                                    <Button
                                        text={btnText}
                                        containerStyle={btnStyle}
                                        rightIcon={
                                            rightIcon ? (
                                                <div className="ml-2 w-6 h-6 bg-black rounded-full">
                                                    <Arrow className="fill-transparent stroke-white w-6 h-6 rotate-180" />
                                                </div>
                                            ) : null
                                        }
                                    />
                                </div>
                            }
                        />
                    </>
                );
            })}
        </div>
    );
};

const Network = () => {
    return (
        <section className="bg-gray-700 text-yellow-50/80 p-10">
            <SectionHeader
                heading1={networkHeader.heading1}
                heading2={networkHeader.heading2}
                containerStyle="w-1/2"
                heading1Style="text-[32px]"
                heading2Style="ext-center max-w-[793px]"
            />
            <AvatarOnGlobe />
            <NetworkSection />
        </section>
    );
};

export default Network;
