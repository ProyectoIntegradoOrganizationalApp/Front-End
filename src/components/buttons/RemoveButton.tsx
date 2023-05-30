import { ButtonProps } from "./Button.interface";

const RemoveButton: React.FC<ButtonProps> = ( props: ButtonProps ) => {

    const icon: string = "fa-solid fa-trash";

    const handleClick = () => {
        props.cb();
    }

    return(
        <div className={`btn flex justify-center items-center !w-10 min-h-fit h-fit rounded-xl !aspect-square border-none bg-red-700 hover:bg-red-800`} onClick={() => handleClick()} >
            <i className={icon + " text-white"}></i>
        </div>
    )

};

export default RemoveButton;