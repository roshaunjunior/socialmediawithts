import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from '../config/firebase'
import {Link} from 'react-router-dom' ;
import {signOut} from 'firebase/auth'
export const Navbar = () => {
   const [user] = useAuthState(auth) ;
   const logOut =async () => {
      await signOut(auth) ;
   }
return <div className='navbar'>
   <div className='links'>
     <Link to = '/'> Home </Link>
     <Link to = '/login'> Login </Link>
     

   </div> 
   { user && 
   <div className='user'>
        <p>{user?.displayName}</p>
        <img src={user?.photoURL || ""} width = '40px' height="40px"/>
        <button onClick={logOut}>Log Out</button>
   </div>
}  
</div>
}