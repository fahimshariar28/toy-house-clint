import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import app from "../../firebase/firebase.config";
import { getAuth, updateProfile } from "firebase/auth";
import { AuthContext } from "../../provider/AuthProvider";
import useTitle from "../../hooks/useTitle";

const Register = () => {
  const auth = getAuth(app);
  const { createUser, signInWithGoogle, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  useTitle("Register");

  const handelRegister = (e) => {
    e.preventDefault();
    setError("");
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    const name = e.target.name.value;
    const image = e.target.image.value;
    if (password === confirmPassword) {
      createUser(email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image,
          })
            .then(() => {
              // Profile updated!
              // ...
              setLoading(true);
            })
            .catch((error) => {
              // An error occurred
              // ...
              setError(error.message);
            });
          navigate("/");
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          setError(error.message);
          // ..
        });
    } else {
      return setError("Password not match");
    }
  };
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setError(error.message);
      });
  };
  return (
    <div className="w-9/12 mx-auto mt-10">
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Create and account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handelRegister}
              >
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="name@company.com"
                    required
                  />
                  <label className="block mt-2 mb-2 text-sm font-medium text-gray-900">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="Fahim Shariar"
                    required
                  />
                  <label className="block mt-2 mb-2 text-sm font-medium text-gray-900">
                    Your Image Url
                  </label>
                  <input
                    type="text"
                    name="image"
                    id="image"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="http://example.com/image.png"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirm-password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required
                  />
                </div>
                <h3>
                  {error && (
                    <span className="text-red-500 text-sm">{error}</span>
                  )}
                </h3>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label className="font-light text-black">
                      I accept the{" "}
                      <a
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary hover:bg-blue-950 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </Link>
                </p>
              </form>
              <div className="flex justify-center items-center">
                <button
                  onClick={handleGoogleLogin}
                  type="button"
                  className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  {/* Login with Google button  */}
                  <FaGoogle className="inline"></FaGoogle> Sign Up with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
