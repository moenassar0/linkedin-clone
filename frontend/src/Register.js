import { useRef, useState, useEffect } from "react";

const EMAIL_REGEX = /.+@.+\..+/;

const Register = () => {

    const userRef = useRef();
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

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        console.log(result);
        setValidEmail(result);
    }, [email]);

    return(
        <>
            Register, gg
        </>
    )
}

export default Register