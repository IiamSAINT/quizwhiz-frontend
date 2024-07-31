function Features() {
  const features = [
    {
      badge: "Real-time Assessment",
      heading: "Save your time for teaching",
      text: "Use our efficient assessment platform to get immediate visibility of your student learning progress",
    },
    {
      badge: "Teaching Material",
      heading: "Building engaging lessons",
      text: "Leverage more than 50,000 curriculum-aligned questions for free, share with other teachers or create your own enabled tech questions to complement your lesson plans",
    },
    {
      badge: "Digital Classroom Activities",
      heading: "Excite your students",
      text: "Engage all students with collaborative challenges and make fun an integral part of the learning experience",
    },
  ];

  return (
    <section className="w-8/12 mx-auto text-center font-cabin my-10">
      <h1 className="text-3xl font-semibold">
        Perfect for Teahcers and Students in the modern classroom
      </h1>

      <div className="flex gap-5 mt-7">
        {features.map((feature, i) => (
          <div className="w-1/3 rounded-lg border-2 py-5 shadow-xl" key={i}>
            <div className="text-start py-1 px-4 bg-blue-600 w-10/12 text-base text-white">
              {feature.badge}
            </div>
            <div className="text-start p-4">
              <h1 className="text-textColor text-xl font-bold">
                {feature.heading}
              </h1>
              <p className="font-normal font-poppins mt-4 text-textColor">
                {feature.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
