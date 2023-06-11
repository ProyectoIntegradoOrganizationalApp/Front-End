import { ButtonProps } from "./Button.interface";

const MessageButton: React.FC<ButtonProps> = ( props: ButtonProps ) => {

    const icon: string = "fa-regular fa-message";

    const handleClick = () => {
        props.cb();
    }

    return(
        <div className={`btn flex justify-center items-center !w-10 min-h-fit h-fit rounded-xl !aspect-square border-none bg-blue-700 hover:bg-blue-800`} onClick={() => handleClick()} >
            <i className={icon + " text-white"}></i>
        </div>
    )

};

export default MessageButton;