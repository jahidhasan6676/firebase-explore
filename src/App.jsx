import { GithubAuthProvider, signInWithPopup, signOut, TwitterAuthProvider } from "firebase/auth"
import auth from "./firebase.init";
import { useState } from "react";


function App() {
  const [user,setUser] = useState(null)

  const provider = new GithubAuthProvider();
  const twitterProvider = new TwitterAuthProvider();

  const handleGithubSingIn = () =>{
    signInWithPopup(auth, provider)
    .then(result =>{
      console.log(result.user)
      setUser(result.user)
    })
    .catch(error =>{
      console.log(error)
      setUser(null)
    })
  }

  const handleLogOut = () =>{
    signOut(auth)
    .then(()=>{
      setUser(null)
    })
  }

  const handleTwitterSingIn = ()=>{
    signInWithPopup(auth,twitterProvider)
    .then(result =>{
      console.log(result.user)
      setUser(result.user)
    })
    .catch(error=>{
      console.log(error)
      setUser(null)
    })
  }

  


  return (
    <>
      
      <h1>Firebase Explore</h1>

     
      

      {
        user?
         <button onClick={handleLogOut}>Log Out</button>
          :
           <> <button onClick={handleGithubSingIn}>Github SingIn</button>
        <button onClick={handleTwitterSingIn}>Twitter SingIn</button></>
      }

      {
        user && <div>
          <h4>Name: {user.displayName}</h4>
          <p>Email: {user.email}</p>
        </div>
      }
     
    </>
  )
}

export default App
