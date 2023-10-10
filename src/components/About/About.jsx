import React from "react";

function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-xl text-gray-900 font-bold md:text-3xl text-left">
              What is ReactJS?
            </h2>
            <p className="mt-6 text-gray-600 text-justify">
              ReactJS is an open-source JavaScript library used to create user
              interfaces in a declarative and efficient way. It is a
              component-based front-end library responsible only for the view
              layer of a Model View Controller(MVC) architecture. React is used
              to create modular user interfaces and promotes the development of
              reusable UI components that display dynamic data.
            </p>
          </div>
        </div>

        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-xl text-gray-900 font-bold md:text-3xl text-left">
              Concept of ReactJS
            </h2>
            <p className="mt-6 text-gray-600 text-justify">
              Let’s say one of your friends posted a photo on Facebook. If you
              like the photo and then you started checking out the comments too.
              Now as you browsing over comments you can see that the likes count
              has increased by 100 since you liked the picture, even without
              reloading the page. This magical change in count is due to
              ReactJS. Note: React is not a framework. It is just a library
              developed by Facebook to solve some problems that we were facing
              earlier. To know more about the ReactJS feature please read
              Features of ReactJS article.
            </p>
          </div>
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
