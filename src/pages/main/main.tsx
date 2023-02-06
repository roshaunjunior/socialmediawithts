import {getDocs , collection} from 'firebase/firestore' ;
import { useEffect, useState, useCallback } from 'react';
import {db} from '../../config/firebase' ;
import { Post } from './post';


export interface IPost {
    id: string ;
    userId : string ; 
    title : string ;
    username : string ;
    description : string ;
}

export const Home = () => {
const [postsList , setPostsList] = useState<IPost[] | null>(null) ; 
const postsRef = collection(db, "posts") ; 

const getPosts = useCallback (async () => {
    const data = await getDocs(postsRef) ;
    setPostsList(data.docs.map((doc) => ({...doc.data(), id : doc.id})) as IPost[]) ;
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])
 
useEffect(() => {
    getPosts() ;
}, [getPosts])
    return <div> 
        {postsList?.map((post) => ( 
        <Post post={post}/>
        ))}
        
    </div>
}