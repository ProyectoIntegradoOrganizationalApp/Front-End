import { ButtonProps } from "./Button.interface";

const AddButton: React.FC<ButtonProps> = ( props: ButtonProps ) => {

    const icon: string = "fa-solid fa-plus";

    const handleClick = () => {
        props.cb();
    }

    return(
        <div className={`btn flex justify-center items-center !w-10 min-h-fit h-fit rounded-xl !aspect-square border-none bg-gradient-to-r from-cyan-500 to-blue-500 hover:to-blue-600`} onClick={() => handleClick()} >
            <i className={icon + " text-white"}></i>
        </div>
    )

};

export default AddButton;