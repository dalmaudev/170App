import "./App.css";

function App() {
  return (
    <>
      <div className="w-full h-screen">
        <div className="grid grid-cols-5 gap-4 text-center">
          <div className="col-span-3 m-8">
            <p className="font-normal text-green-300 text-6xl font-poppins mt-5">
              <span className="font-bold text-green-500 text-7xl font-poppins">
                170
              </span>
              App
            </p>
            <p className="text-green-700 font-regular mt-2">
              Lorem Ipsum ha sido el texto de relleno estándar de las industrias
              desde el año 1500
            </p>
            <div className="flex md:justify-between justify-center items-center mt-10">
              <div
                style={{ height: "1px" }}
                className="bg-green-200 md:block hidden w-4/12"
              ></div>
              <p className="md:mx-2 text-3xl font-light text-green-600">
                {" "}
                Login{" "}
              </p>
              <div
                style={{ height: "1px" }}
                className="bg-green-200 md:block hidden w-4/12"
              ></div>
            </div>
            <form action="" className="mt-6">
              <div className="my-5 text-sm text-green-600">
                <label for="username" className="block text-green-600">
                  Username
                </label>
                <input
                  type="text"
                  autofocus
                  id="username"
                  className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-green-50 w-full border border-green-200 placeholder-green-600"
                  placeholder="Username"
                />
              </div>
              <div className="my-5 text-sm text-green-600">
                <label for="password" className="block text-green-600">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-green-50 w-full border border-green-200 placeholder-green-600"
                  placeholder="Password"
                />
                <div className="flex justify-end mt-2 text-xs text-green-600">
                  <a href="../../pages/auth/forget_password.html hover:text-green">
                    Forget Password?
                  </a>
                </div>
              </div>

              <button className="block text-center text-white bg-green-500 p-3 duration-300 rounded-sm hover:bg-green-600 w-full font-bold text-lg">
                Login
              </button>
            </form>

            <p className="mt-5 text-xs text-center font-light text-green-400">
              {" "}
              Don't have an account?{" "}
              <a
                href="../auth/register.html"
                className="text-green font-medium"
              >
                {" "}
                Create One{" "}
              </a>{" "}
            </p>
          </div>

          <div className="col-span-2 bg-login-page h-screen"></div>
        </div>
      </div>
    </>
  );
}

export default App;
