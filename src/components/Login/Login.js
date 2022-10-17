import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Login.css';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error)
            })

    }
    return (
        <div>
            <div className="form-container">
                <h2 className='text-center text-success'>login</h2>

                <form onSubmit={handleSubmit} className=''>
                    <div className="mb-3 mx-5 p-2">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email </label>
                        <input type="email" name='email' required className="form-control" placeholder="email" />
                    </div>
                    <div className="mb-3 mx-5 p-2">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                        <input type="password" name='password' required className="form-control" placeholder="password" />
                    </div>
                    <div className="mx-5">
                        <button className='btn btn-secondary w-100'> Login</button>
                    </div>
                </form>
                <p className='text-center mt-3'>New to Ema-jhon? <Link to='/register' className='text-danger'>Create New Account</Link></p>

            </div>
        </div>
    );
};

export default Login;