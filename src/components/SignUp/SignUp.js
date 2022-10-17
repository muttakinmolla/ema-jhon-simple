import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './SignUp.css';

const SignUp = () => {

    const [error, setError] = useState();
    const { createUser } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (password.length < 6) {
            setError('password should be 6 charecter');
            return;
        }

        if (password !== confirmPassword) {
            setError('Your password does not match')
            return;
        }
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <div className="form-container">
                <h2 className='text-center text-success'>SignUp</h2>

                <form className='' onSubmit={handleSubmit}>
                    {/* <div className="mb-3 mx-5 p-2">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Name </label>
                        <input type="text" name='name' required className="form-control" placeholder="name" />
                    </div> */}
                    <div className="mb-3 mx-5 p-2">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email </label>
                        <input type="email" name='email' required className="form-control" placeholder="email" />
                    </div>
                    <div className="mb-3 mx-5 p-2">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                        <input type="password" name='password' required className="form-control" placeholder="password" />
                    </div>
                    <div className="mb-3 mx-5 p-2">
                        <label htmlFor="confirmPassword" className="form-label">confirm password</label>
                        <input type="password" name='confirmPassword' required className="form-control" placeholder="confirm Password" />
                    </div>
                    <div className="mx-5">
                        <button className='btn btn-secondary w-100'> SignUp</button>
                    </div>
                </form>
                <p className='text-center mt-3'>Already Have an Account? <Link to='/register' className='text-danger'>Go to Login</Link></p>
                <p className='text-danger'>{error}</p>

            </div>
        </div>
    );
};

export default SignUp;