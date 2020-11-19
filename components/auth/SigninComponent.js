import Router from 'next/router';
import Link from 'next/link';
import { useState ,useEffect} from 'react';
import { signin,authenticate,isAuth } from '../../actions/auth';
import LoginGoogle from './LoginGoogle';



const SigninComponent=()=>{

 const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        loading: false,
        message: '',
        showForm: true
    });

    const { email, password, error, loading, message, showForm } = values;

    useEffect(()=>{
       isAuth() && Router.push('/');
    },[])

    const handleSubmit = e => {
        e.preventDefault();
        setValues({ ...values, loading: true, error: false });
        const user = { email, password };

        signin(user).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
              
                authenticate(data,()=>{
                    if (isAuth() && isAuth().role === 1) {
                        Router.push(`/admin`);
                    } else {
                        Router.push(`/user`);
                    }
                })
                
            }
        });
    };

    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value });
    };

    const signinForm=()=>{
    
         return(
        <>
         <section className="container">
        
        <div className="account">
            <div>

        <h1 className="large text-primary">
            Sign In
        </h1>
        <p className="extra-small text-light-gray">Sign in to get latest Job notifications and many more</p>
        <form  className="form" onSubmit={handleSubmit}>
            <div className="form-group">
                <input   value={email} onChange={handleChange('email')} type="email"  placeholder="Email Address" />
            </div>
            <div className="form-group">
                <input  value={password} onChange={handleChange('password')} type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Sign in" className="btn nbtn btn-primary" />
        </form>
        <p className="my-1 extra-small">Forgot Password?<span> <Link href="/auth/password/forgot" ><a>Recover here</a></Link></span></p> 
        <div style={{textAlign:'center',margin:'auto',justifyContent:'center'}}>
        
          <h1 className="lead text-primary my-1">Login using google</h1>
          <p className="extra-small text-light-gray">Recommended</p>
         <LoginGoogle />
        </div>
     
      
    </div>
    <div className="second p-2 hide-sm">
        <div className="fst">
        <h2 className="text-dark">Login to get Job notifications and many more</h2>
            <img src="img/stupro2.png" alt="" />
        </div>
       
        <div>
            <p className="my-1">Don't have an account?</p>
                <Link  href="/signup"><a className="btn btn-dark">Sign Up</a></Link>
        
    </div>
    </div>

    </div>
    </section>
   </>    
    
    )
  }
   return (
        <React.Fragment>
            {showForm && signinForm()}
           
        </React.Fragment>
    );
}
    
     


export default SigninComponent;