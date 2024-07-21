const BlurDiv = ({ onClick, containerStyle }) => {
    return (
        <div
            onClick={onClick}
            className={`w-36 h-24 bg-violet-500 blur-[60px] ${containerStyle}`}
        />
    );
};

export default BlurDiv;
