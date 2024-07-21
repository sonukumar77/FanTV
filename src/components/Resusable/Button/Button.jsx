const Button = ({ containerStyle, buttonStyle, text, rightIcon, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`w-48 py-3 rounded-full flex justify-center items-center ${containerStyle}`}
        >
            <button className={`${buttonStyle}`}>{text}</button>
            {rightIcon ? rightIcon : null}
        </div>
    );
};

export default Button;
