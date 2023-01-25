import {useForm} from 'react-hook-form' ;
import * as yup from 'yup' ;
import {yupResolver} from '@hookform/resolvers/yup' ;
import {addDoc, collection} from 'firebase/firestore'
import { auth, db } from '../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import {useNavigate} from 'react-router-dom' ;


interface createDataForm {
    title: string ,
    description: string,
}

export const Form = () => {
   
    // schema for the yup validation ..
   const schema = yup.object().shape({
    title: yup.string().required("You must add a title"),
    description: yup.string().required("You must type some description about post "),
   })

   const postsRef = collection(db,"posts") ; 

   const [user] = useAuthState(auth) ;
   
   const navigate = useNavigate() ;
   
   const onCreateForm = (data:createDataForm) => {
       addDoc(postsRef, {
        title: data.title,
        description: data.description,
        username: user?.displayName,
        userId: user?.uid,        
        }) ;
        navigate("/")
   }

//useForm hook for register and handleSubmit . jo b user value day ga input may usko pick kray ga register jesay hum schema may define karain gay .
const {register , handleSubmit , formState : {errors}} = useForm<createDataForm>({resolver: yupResolver(schema),}) ;
//schema or useForm hook ko apas may jorna k resolver hota .


return <form onSubmit={handleSubmit(onCreateForm)}> 

      <input placeholder="Title..." {...register("title")}/>
      <p style={{color : "red"}}>{errors.title?.message}</p>
     <textarea placeholder="Description..." {...register("description")}></textarea>
     <p style={{color : "red"}}>{errors.description?.message}</p>
     <input type="submit" className='submitForm'/>
     </form>
}