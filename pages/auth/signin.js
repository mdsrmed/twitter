import {getProviders,signIn} from "next-auth/react";

export default function signin({providers}) {
  return (
    <div className = "flex justify-center mt-20 space-x-1 pr-10 ">
        <img src = "https://www.shareicon.net/download/2017/05/06/885608_mobile_512x512.png" alt = "twitter-image" className = "hidden md:inline-flex object-cover md:w-50 md:h-100  rotate-6 " />

        <div className=" ">

           {Object.values(providers).map((provider)=>
            (<div className = "flex flex-col items-center mt-20 ">
                <img src = "https://help.twitter.com/content/dam/help-twitter/brand/logo.png" alt = "twitter-logo" className = "w-32 object-cover" />

                <p className ="text-center text-sm italic my-10"> This is a twitter clone </p>
                <button onClick = {() => signIn(provider.id,{callbackUrl:"/"})}className = "bg-red-400 rounded-lg p-4 text-white hover:bg-red-500"> Sign in with {provider.name}</button>
            
            </div>))}
        </div>
    </div>
    
  )
}



export async function getServerSideProps(){

    const providers = await getProviders();

    return {
        props: {
            providers,
        },
    };
}