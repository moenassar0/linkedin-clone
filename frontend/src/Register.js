import { useRef, useState, useEffect } from "react";

const EMAIL_REGEX = /.+@.+\..+/;

const Register = () => {

    const fnameRef = useRef();
    const lnameRef = useRef();
    const errorRef = useRef();

    const [fname, setFname] = useState('');
    const [fnameFocus, setFnameFocus] = useState(false);

    const [lname, setLname] = useState('');
    const [lnameFocus, setLnameFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [emailFocus, setEmailFocus] = useState(false);
    const [validEmail, setValidEmail] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        fnameRef.current.focus();
    }, []);

    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        console.log(result);
        setValidEmail(result);
    }, [email]);

    useEffect(() => {
        setErrorMessage('')
    }, [fname, lname, email, password])

    return(
        <>
            {errorMessage ?? <p ref={errorRef}>{errorMessage}</p>}
            <h1>Register</h1>
            <form>
                <label htmlFor="fname">
                    First Name:
                </label>
                <input
                    type="text"
                    id="fname"
                    ref={fnameRef}
                    autoComplete="off"
                    onChange={(e) => setFname(e.target.value)}
                    required
                    aria-invalid={fname.length > 2 ? true : false}
                    aria-describedby="uidnote"
                    onFocus={() => {setFnameFocus(true)}}
                    onBlur={() => {setFnameFocus(false)}}
                />
                {fname.length < 3 && fname && <p id="uidnote">First name should be larger than 3 characters</p>}
            </form>
        </>
    )
}

export default Register