import { useState } from "react";
import Success from "../components/Success";

export default function Register() {
    // form/inputs states
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // error states
    const [nameError, setNameError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);

    // display success popup state
    const [show, setShow] = useState(false);


    // Accessing the input data
    const handleName = (e) => {
        const value = e.target.value
        setName(value);
    };
    const handleEmail = (e) => {
        const value = e.target.value
        setEmail(value);
    };
    const handlePassword = (e) => {
        const value = e.target.value
        setPassword(value);
    }

    // form validation and submit
    const handleSubmit = (e) => {


        // Toprevent default behavior of the form
        e.preventDefault();

        // validation starts

        // validating with regular expressios (Regex)
        if (!name.match(/^[A-Za-z\s]{2,50}$/)) {
            setNameError("Invalid name");
            return;
        };
        if (!email.match(/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/)) {
            setEmailError("Invalid name");
            return;
        };
        if (password.length < 5) {
            setPasswordError("Password is to short");
            return;
        };

        // Saving to local storage
        localStorage.setItem("user", JSON.stringify({ name, email, password }));
        setShow(true);

    }



    return (
        <div className="w-screen h-screen bg-black flex items-center justify-center">
            <div className="w-[600px] min-h-[80vh] bg-[url('./assets/bf_image.jpg')] flex items-center justify-center">
                {show ? <Success show={show} setShow={setShow} /> :
                    <div className="flex min-h-[60vh] m-8 rounded-lg border-2 border-white justify-between items-center gap-8">
                        <div className="w-52 relative text-white ml-3">
                            <div className="py-3 absolute top-1/2 -left-10 -translate-y-1/2 bg-gradient-to-r from-[#15342e] z-10 pl-12">
                                <h1 className="font-bold mb-3">Sign Up</h1>
                                <p>sign up to unlock exciting eperience with our services</p>
                            </div>
                        </div>
                        <form className="h-[60vh] bg-white py-4 px-8" onSubmit={(e) => handleSubmit(e)}>
                            <h2 className="font-bold mb-3">Let's Get Started</h2>
                            <div className="mb-2">
                                <label htmlFor="">Name</label>
                                <input type="text" className="w-full border border-gray-400 px-2 rounded" placeholder="Type your name"
                                    onChange={(e) => handleName(e)} />

                                {nameError && <p className=" text-red-600 ">{nameError}</p>}
                            </div>
                            <div className="mb-2">
                                <label htmlFor="">email</label>
                                <input type="text" className="w-full border border-gray-400 px-2 rounded" placeholder="Type your email"
                                    onChange={(e) => handleEmail(e)}
                                />
                                {emailError && <p className=" text-red-600 ">{emailError}</p>}
                            </div>
                            <div className="mb-2">
                                <label htmlFor="">Password</label>
                                <input type="password" className="w-full border border-gray-400 px-2 rounded" placeholder="Type your email"
                                    onChange={(e) => handlePassword(e)}
                                />
                                {passwordError && <p className=" text-red-600 ">{passwordError}</p>}
                            </div>
                            <div className="mt-5">
                                <input type="submit" className="w-full bg-blue-700 rounded text-white cursor-pointer" />

                            </div>
                        </form>
                    </div>
                }
            </div>
        </div>
    );
}