const About = () => {
  const titleClass =
    "font-md collapse-title rounded-lg border-2 text-xl text-gray-200 backdrop-blur-lg";
  const contentClass =
    "collapse-content mt-2 rounded-md border-2 border-gray-300 backdrop-blur-lg";
  const aboutData = [
    {
      topic_title: "About",
      content: "This is the about page content.",
    },
  ];

  return (
    <>
      <div className="collapse bg-transparent p-4 text-gray-200">
        <input type="checkbox" className="peer" />
        <div className={titleClass}>test</div>

        <div className={contentClass}>
          <p>Test</p>
        </div>
      </div>
    </>
  );
};

export default About;
