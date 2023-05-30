import { useState } from "react";
import { FormProps } from "../../../adapters/api/useUserApi";

export const Form = ( props: { type: string, registerUser: (props: FormProps) => void, fetchUser: any } ) => {

    // Datos del Formulario
    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [last_name, setLastName] = useState<string>('');
    const [prefix, setPrefix] = useState<string>('+34');
    const [phone_number, setPhoneNumber] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmpass, setConfirmPass] = useState<string>('');
    const [valid, setValid] = useState<boolean>(false);
    const [input, setInput] = useState<string>('input input-light mt-6 input-bordered w-full mt-6');

    /**
     * Se encarga de enviar el formulario.
     * 
     * Le entra o un evento de submit o any, porque no he sido capaz de asigarle tipo
     * al butón de submit sin perder la funcionalidad de preventDefault().
     * @param event 
     */
    const sendForm = ( event: React.MouseEvent ) => {
        event.preventDefault();
        
        if( props.type === "sign up" && valid ) {
            props.registerUser({
                name: name, 
                last_name: last_name, 
                prefix: prefix, 
                phone_number: phone_number, 
                email: email, 
                password: password, 
                confirmPass: confirmpass, 
                photo: "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=740&t=st=1684609159~exp=1684609759~hmac=700c15129fea8d9ad79baf8e80b38669e4316820469a65febbedcac473740017cd ."
            });
        } else if( props.type === "log in" && email.length > 10 && password.length > 5 ) {
            props.fetchUser({email, password})
        }
    }

    /**
     * Valida las contraseñas para comprobar que son iguales.
     * @param valor 
     */
    const validate = (valor: string) => {
        if( valor != password ) {
            setValid(false);
            setInput('input input-bordered input-error w-full mt-6');
        } else {
            setValid(true);
            setInput('input input-light mt-6 input-bordered w-full mt-6');
        }
    }

    return (
        <form className="w-full flex flex-col">
            {  props.type === "sign up" && (
                <>
                    <input 
                        type="text" 
                        minLength={10} 
                        maxLength={80} 
                        placeholder="Enter first name" 
                        value={name} 
                        onChange={event => {
                            setName(event.target.value);
                        }}
                        className="input input-bordered w-full mt-6"
                        required
                    />
                    <input 
                        type="text" 
                        minLength={10} 
                        maxLength={80} 
                        placeholder="Enter last name" 
                        value={last_name} 
                        onChange={event => {
                            setLastName(event.target.value);
                        }}
                        className="input input-bordered w-full mt-6"
                        required
                    />
                    <div className="flex gap-8">
                        <input
                            type="text"
                            className="input input-bordered w-20 mt-6"
                            minLength={3} 
                            maxLength={3}
                            value={prefix}
                            onChange={ event => {
                                setPrefix(event.target.value);
                            }}
                            required
                        />
                        <input 
                            type="number" 
                            minLength={9} 
                            maxLength={9} 
                            placeholder="Enter your Phone Number" 
                            value={phone_number} 
                            onChange={event => {
                                setPhoneNumber(event.target.value);
                            }}
                            className="input input-bordered w-full mt-6"
                            required
                        />
                    </div>
                </>
            )}
            
            <input 
                type="email" 
                minLength={10} 
                maxLength={80} 
                placeholder="Enter email" 
                value={email} 
                onChange={event => {
                    setEmail(event.target.value)
                }}
                className="input input-bordered w-full mt-6"
                required
            />
            <input 
                type="password" 
                minLength={4} 
                placeholder="Enter password" 
                className="input input-bordered w-full mt-6" 
                value={password}
                onChange={ event => {
                    setPassword(event.target.value)
                }} 
                required
            />
            { props.type === "sign up" && (
                <input
                    type="password" 
                    minLength={2} 
                    placeholder="Confirm password" 
                    className={input}
                    value={confirmpass}
                    onChange={ event => {
                        validate(event.target.value)
                        setConfirmPass(event.target.value)
                    }} 
                    required
                />
            )}

            <p className="mt-6 cursor-pointer select-none mx-auto text-base w-fit">Recovery password</p>
            <button 
                type="submit" 
                onClick={(event) => {
                    sendForm(event);
                }} 
                className="mt-6 btn btn-primary w-full"
            >
                    {props.type}
            </button>
        </form>
    )
}