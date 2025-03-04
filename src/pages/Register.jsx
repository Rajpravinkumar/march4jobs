import { useState } from 'react';
const Register = () => {
  const [form, setForm] = useState ({
    name: "",
    email: "",
    password: ""
  });
  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("Registering.....");
    console.log(form);
  };

  return (
    <div className="mx-auto mt-20 p-4 border rounded max-w-xs">
      <h2 className="mb-4 text-xl">Candidate Registration</h2>
      <form className="flex flex-col space-y-3" onSubmit={handleRegister}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          className="p-2 border rounded"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="p-2 border rounded"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="p-2 border rounded"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button className="bg-blue-500 py-2 rounded text-white" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
