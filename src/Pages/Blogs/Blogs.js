import React from "react";
import "flowbite";
import bar from "../../components/Shared/Progress/Progress";

const Blogs = () => {
  bar();
  return (
    <div className="bg-realBlack">
      <h1 className="text-center text-4xl py-6 font-serif text-white">
        {" "}
        Blogs Section{" "}
      </h1>
      <hr className="w-2/3 md:w-1/2 mx-auto border-white" />
      <div
        className="accordion w-full px-4 md:w-1/2 mx-auto py-6 mt-12"
        id="accordionExample"
      >
        <div className="accordion-item bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="headingOne">
            <button
              className="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Question #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5">
              <div className="p-6 shadow-lg rounded-lg bg-gray-100 text-gray-700">
                <h2 className="font-semibold text-3xl mb-5">
                  What is the difference between javascript and nodejs ?{" "}
                  <div className="tags flex justify-center items-center my-4">
                    <span className="px-4 py-2 rounded-full text-gray-800 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease mx-2">
                      JS
                    </span>
                    <span className="px-4 py-2 rounded-full text-gray-800 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease mx-2">
                      NodeJS
                    </span>
                  </div>
                </h2>
                <p>
                  The choice between JavaScript and Node.js boils down to a flexible and easy frontend programming language against the framework that allows it to extend into the backend sector.
                </p>
                <hr className="my-6 border-gray-300" />
                <p>
                  JavaScript is a scripting language that underpins the majority of websites. Because JavaScript can dynamically update HTML components, it is frequently used in conjunction with HTML and CSS to render web pages. It enables you to refresh the page automatically to update data, show information using cool images, and create interactive features.
                </p>
                <hr className="my-6 border-gray-300" />
                <p>
                  Node.js is a programming environment that can run JavaScript code without the use of a browser. It's powered by Chrome's V8 JavaScript engine. The Node.js environment is available for Mac OS X, Windows, and Linux. It also provides a slew of JavaScript libraries, allowing developers to use open source components and tools to build applications faster.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="accordion-item bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="headingTwo">
            <button
              className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Question #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5">
              <div className="p-6 shadow-lg rounded-lg bg-gray-100 text-gray-700">
                <h2 className="font-semibold text-3xl mb-5">
                  What is the differences between sql and nosql databases?
                </h2>
                <div className="tags flex justify-center items-center my-4">
                  <span className="px-4 py-2 rounded-full text-gray-800 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease mx-2">
                    SQL
                  </span>
                  <span className="px-4 py-2 rounded-full text-gray-800 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease mx-2">
                    NoSQL
                  </span>
                </div>
                <p>
                  Here are some key distinctions between SQL and NoSQL databases.
                </p>
                <hr className="my-6 border-gray-300" />
                <p>
                  SQL, or Structured Query Language, is the most widely used and widely used programming language for relational database management systems. It is a data extraction, storage, insert, remove, update, and management language for structured data and strategic analysis.
                </p>
                <h2 className="text-3xl my-4">Features of SQL : </h2>

                <ul className="list-disc ml-8">
                  <li>Provide High-Performance Capabilities</li>
                  <li>Handle Large Transactions with efficiency</li>
                  <li>SQL is easy to learn and manage</li>
                  <li>The progamming language is open source</li>
                  <li>
                    To query databases, it supports Data Definition Language and Data Manipulation Language.
                  </li>
                  <li>
                    It is suitable for every type of organization{" "}
                  </li>
                </ul>
                <hr className="my-6 border-gray-300" />
                <p>
                  NoSQL databases provide a mechanism for storing and retrieving data that is not in tabular form. Carl Stroz popularized the term "non-relational database" in 1998. It now stands for Not Only SQL. It does not limit data storage to tables; instead, it allows big data to be stored in structured, unstructured, semi-structured, or polymorphic forms.
                </p>
                <h2 className="text-3xl my-4">Features of NoSQL : </h2>

                <ul className="list-disc ml-8">
                  <li>
                    {" "}
                    NoSQL has higher scalability than other database management
                    systems
                  </li>
                  <li>
                    NoSQL allows the distribution of data on more than just one
                    device.{" "}
                  </li>
                  <li>
                    With NoSQL Database, you do not require specialized or
                    complex hardware or storage solutions.
                  </li>
                  <li>Does not require data normalization</li>
                  <li>Simple API for easy user interfaces</li>
                  <li>
                    Can store unstructured, semi-structured, or structured data.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="headingThree">
            <button
              className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Question #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5">
              <div className="p-6 shadow-lg rounded-lg bg-gray-100 text-gray-700">
                <h2 className="font-semibold text-3xl mb-5">
                  What is the purpose of JWT and how does it work?
                </h2>
                <div className="tags flex justify-center items-center my-4">
                  <span className="px-4 py-2 rounded-full text-gray-800 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease mx-2">
                    JWT
                  </span>
                </div>
                <p>
                  JSON Web Token (JWT) is an open standard for securely transmitting information as a JSON object between parties.
                </p>
                <hr className="my-6 border-gray-300" />
                <p>
                  The goal of employing JWT is not to hide data, but to confirm its authenticity. JWT is signed and encoded rather than encrypted. JWT is a stateless authentication technique based on tokens. Because it is a client-side stateless session, the server does not have to rely solely on a datastore (database) to save session information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
