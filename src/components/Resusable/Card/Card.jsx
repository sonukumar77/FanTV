const Card = ({
    containerStyle,
    onCardClick,
    cardHeader,
    cardBody,
    cardFooter,
}) => {
    return (
        <div
            onClick={onCardClick}
            className={`w-100 h-100 p-4 rounded-xl ${containerStyle}`}
        >
            {cardHeader ? cardHeader : null}
            {cardBody ? cardBody : null}
            {cardFooter ? cardFooter : null}
        </div>
    );
};

export default Card;
