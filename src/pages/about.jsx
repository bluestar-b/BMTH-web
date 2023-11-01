const About = () => {
  const titleClass =
    "font-md collapse-title rounded-lg border-2 text-xl text-gray-200 backdrop-blur-lg mt-2";
  const contentClass =
    "collapse-content mt-2 rounded-md border-2 border-gray-300 backdrop-blur-[30px] text-gray-200";
  const aboutData = [
    {
      topic_title: "About",
      content: "This is the about page content.",
    },
    {
      topic_title: "Mission",
      content: "Our mission is to create great products.",
    },
    {
      topic_title: "Vision",
      content: "We aim to change the world with our innovations.",
    },
  ];

  return (
    <>
    <div>
      {aboutData.map((data, index) => (
        <details className="collapse bg-transparent lg:p-4" key={index}>
          <summary className={titleClass}>{data.topic_title}</summary>
          <div className={contentClass}>
            <p>{data.content}</p>
          </div>
        </details>
      ))}
      </div>
    </>
  );
};

export default About;
