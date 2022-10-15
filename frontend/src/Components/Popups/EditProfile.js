export const EditProfile = () => {

    return(
        <>
            <div className="popup-cover">
                <div className="popup-form">
                    <div className="popup-header">
                        <h3>Edit Profile</h3>
                        <button className="close-btn pointer">X</button>
                    </div>
                    <div className="register-field padding-15">
                        <label htmlFor="fname">
                            First Name:
                        </label>
                        <input
                            type="text"
                            id="fname"
                            autoComplete="off"
                            aria-describedby="uidnote"
                        />
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditProfile