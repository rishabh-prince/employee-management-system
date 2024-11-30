import { useState } from 'react'

const Login = ({handleLogin}) => {
    const [email,setEmail]=useState("");
    const [password, setPassword]=useState("");
const handleSubmit=(e)=>{
    e.preventDefault();
    handleLogin(email,password);
    setEmail("");
    setPassword("");
}
  return (
    <div className="flex items-center flex-col justify-center w-screen h-screen">
      <h1 className='mb-10 text-5xl font-serif font-bold'>Login</h1>
      <div className="border-2 border-blue-600 p-20 rounded-lg w-10/12 md:w-5/12">
        <form className="flex flex-col items-center justify-center w-full" onSubmit={(e)=>handleSubmit(e)}>
          <input required
            className="border-2 border-emerald-600 rounded-full py-3 px-5 text-xl text-white outline-none bg-transparent"
            type="email"
            placeholder="enter email "
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <input required
            className="border-2 border-emerald-600 rounded-full py-3 px-5 text-xl text-white outline-none bg-transparent mt-3"
            type="password"
            placeholder="enter password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <button className="border-2 border-none rounded-full py-3 px-5 text-xl text-white outline-none bg-emerald-700 mt-7">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login