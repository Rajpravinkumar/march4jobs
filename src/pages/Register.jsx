import { useDispatch , useSelector } from "react-redux";
import {
  selectEmail,
  selectName,
  selectPassword,
  setEmail,
  setName,
  setPassword
} from "../redux/features/auth/registerSlice";
import { toast } from "react-toastify";
import authServices from "../services/authServices";
import { useNavigate } from "react-router";
 
const Register = () => {
  const name = useSelector(selectName);
  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    toast.success('Registering...');

    //call the register function from the authServices
    try {

      const response = await authServices.register({ name, email, password });

      if (response.status === 201) {
        toast.success('Registered successfully');

        // clear the force
        dispatch(setName(''));
        dispatch(setEmail(''));
        dispatch(setPassword(''));

        // Redirect to the logic page 
        setTimeout(
          () => {
        navigate('/login');
      }, 500);

      }
    } catch (error){
      toast.error(error.response.data.message);
      
    }
  
  }
  return (
    <div className="mx-auto mt-20 p-4 border rounded max-w-xs">
      <h2 className="mb-4 text-xl">Candidate Registration</h2>
      <form className="flex flex-col space-y-3" onSubmit={handleRegister}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          className="p-2 border rounded"
          value={name}
          onChange={(e) => dispatch(setName(e.target.value))}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="p-2 border rounded"
          value={email}
          onChange={(e) => dispatch(setEmail(e.target.value))}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="p-2 border rounded"
          value={password} 
          onChange={(e) => dispatch (setPassword(e.target.value))}
        />
        <button className="bg-blue-500 py-2 rounded text-white" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
