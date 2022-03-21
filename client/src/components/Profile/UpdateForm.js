

const UpdateForm = (props) => {

    const { updateFormHandler, updateHandler, user, setUser, errors } = props

    const changeHandler = e => {
        let newUser = { ...user }
        newUser[e.target.name] = e.target.value
        setUser(newUser)
    }


    return (
        <form onSubmit={updateHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label >Username</label>
                    <input type="text" name="username" value={user.username} onChange={changeHandler} />
                </div>
                <div className="new-expense__control">
                    <label >Email</label>
                    <input type='email' name='email' value={user.email} onChange={changeHandler} />
                </div>
                <div className="new-expense__control">
                    <label >First Name</label>
                    <input type="text" name="firstName" value={user.firstName} onChange={changeHandler} />
                </div>
                <div className="new-expense__control">
                    <label >Last Name</label>
                    <input type='text' name='lastName' value={user.lastName} onChange={changeHandler} />
                </div>
                <div className="new-expense__actions" style={{ marginLeft: '49%' }}>
                    <button style={{ background: "", border: "none" }} type='button' onClick={updateFormHandler}>Close</button>
                    <button style={{ background: "", border: "none" }} type='submit'>Update Profile</button>
                </div>
                <ul>
                    {errors.username && <li style={{ color: "red" }}>{errors.username.message}</li>}
                    {errors.firstName && <li style={{ color: "red" }}>{errors.firstName.message}</li>}
                    {errors.lastName && <li style={{ color: "red" }}>{errors.lastName.message}</li>}
                    {errors.email && <li style={{ color: "red" }}>{errors.email.message}</li>}
                </ul>
            </div>
        </form>
    )
}
export default UpdateForm