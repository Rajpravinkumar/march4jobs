import React from "react";
const Login = () => {
    return (
      <div className="mx-auto mt-20 p-4 border rounded max-w-xs">
        <h2 className="mb-4 text-xl">Login</h2>
        <form className="flex flex-col space-y-3" >
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="p-2 border rounded" />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="p-2 border rounded"
            
          />
          <button className="bg-blue-500 py-2 rounded text-white">Login</button>
        </form>
      </div>
    );
};

export default Login;
