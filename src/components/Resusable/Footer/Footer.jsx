import { footerHeader } from "../../../constants/common";
import { SectionHeader } from "../Intro/Intro";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-yellow-50/80 p-10">
            <SectionHeader
                heading1={footerHeader.heading1}
                heading2={footerHeader.heading2}
                containerStyle="w-1/2"
                heading1Style="text-3xl"
            />
        </footer>
    );
};

export default Footer;
