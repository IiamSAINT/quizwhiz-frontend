import Features from "./Features";
import Navbar from "./Navbar";

function Homepage() {
  return (
    <div>
      <Navbar />
      <header className="h-screen bg-hero bg-bottom bg-cover relative flex justify-center flex-col px-10">
        <h1 className="text-7xl text-white font-cabin w-2/4">
          The best way to make learning{" "}
          <span className="font-cabinSketch font-bold">Fun</span> and{" "}
          <span className="font-cabinSketch font-bold">Interactive</span>
        </h1>
        <div className="py-3 px-6 bg-blue-100 w-fit flex items-center gap-5 rounded-full mt-14">
          <h1 className="font-semibold font-cabin text-xl">
            Joining as a participant?
          </h1>
          <form action="#">
            <input
              type="text"
              placeholder="Enter code here"
              className="py-3 px-6 font-bold rounded-full focus:outline-1 focus:outline-blue-100"
            />
          </form>
        </div>
      </header>

      <section className="my-20">
        <div className="text-center">
          <div className="inline-block bg-gray-200 py-3 px-4 rounded-lg">
            How it works
          </div>
          <h1 className="mt-5 text-4xl mb-2">
            Get Started in 3 Steps
          </h1>
        </div>
        <div className="bg-grad my-5">
          <div className="w-10/12 mx-auto flex justify-between items-center ">
            <div className="w-1/2  py-7 px-5">
              <h1 className="text-4xl font-cabin font-bold">1. Create</h1>
              <p className="text-lg mt-10 w-10/12">
                Create from scratch, from a template or with AI. <br />
                Customize your item based on your use-case and brand. It takes
                minutes to get started.
              </p>
            </div>
            <div className="img w-1/2 h-96  flex justify-center items-center ">
              <div className="w-[80%] h-[80%]">
                <img
                  src="src\assets\images\login.jpg"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-grad my-5">
          <div className="w-10/12 mx-auto flex flex-row-reverse justify-between items-center ">
            <div className="w-1/2  py-7 px-5">
              <h1 className="text-4xl font-cabin font-bold">2. Join a Quiz</h1>
              <p className="text-lg mt-10 w-10/12">
                Create from scratch, from a template or with AI. <br />
                Customize your item based on your use-case and brand. It takes
                minutes to get started.
              </p>
            </div>
            <div className="img w-1/2 h-96  flex justify-center items-center ">
              <div className="w-[80%] h-[80%]">
                <img
                  src="src\assets\images\login.jpg"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-grad my-5">
          <div className="w-10/12 mx-auto flex justify-between items-center ">
            <div className="w-1/2  py-7 px-5">
              <h1 className="text-4xl font-cabin font-bold">3. View Scores</h1>
              <p className="text-lg mt-10 w-10/12">
                Create from scratch, from a template or with AI. <br />
                Customize your item based on your use-case and brand. It takes
                minutes to get started.
              </p>
            </div>
            <div className="img w-1/2 h-96  flex justify-center items-center ">
              <div className="w-[80%] h-[80%]">
                <img
                  src="src\assets\images\login.jpg"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-20 text-center font-cabin">
        <div className="inline-block bg-gray-200 py-3 px-4 rounded-lg">
          How it works
        </div>
        <h1 className="mt-5 text-4xl mb-2">Get Started in 3 Steps</h1>
        <p>Brand helps you create, interact and analyse - let's see how!</p>
        <div className="flex mt-10 w-10/12 mx-auto gap-5">
          <div className="w-1/3 border-[1.5px] rounded-2xl p-6 text-start">
            <h1 className="text-2xl">Create Quiz</h1>
            <div className="img h-60 bg-blue-200 mt-4 rounded-lg">
              {/* <img src="src\assets\images\idea-bulb.png" alt="" /> */}
            </div>
            <p className="mt-4 font-thin">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              ratione quo similique soluta animi quia enim, accusamus corrupti
              nihil tempora. Iure commodi quidem possimus alias assumenda fugiat
            </p>
          </div>
          <div className="w-1/3 border-[1.5px] rounded-2xl p-6 text-start">
            <h1 className="text-2xl">Join a Quiz</h1>
            <div className="img h-60 bg-blue-200 mt-4 rounded-lg"></div>
            <p className="mt-4 font-thin">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              ratione quo similique soluta animi quia enim, accusamus corrupti
              nihil tempora. Iure commodi quidem possimus alias assumenda fugiat
            </p>
          </div>
          <div className="w-1/3 border-[1.5px] rounded-2xl p-6 text-start">
            <h1 className="text-2xl">View Scores</h1>
            <div className="img h-60 bg-blue-200 mt-4 rounded-lg"></div>
            <p className="mt-4 font-thin">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              ratione quo similique soluta animi quia enim, accusamus corrupti
              nihil tempora. Iure commodi quidem possimus alias assumenda fugiat
            </p>
          </div>
        </div>
      </section>

      <section></section>

      <Features />
    </div>
  );
}

export default Homepage;
