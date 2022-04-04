import React from "react";

const Blogs = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="my-10 text-5xl font-medium text-center">Popular Blogs</h1>
      <div className="text-gray-800">
        <article className="p-5 my-10 mx-auto bg-[#EBFAEF] border-2 border-green-100 rounded-md shadow-lg">
          <h2 className="mt-3 text-3xl font-medium">
            What is Context API? Purpose of Context API?
          </h2>
          <p className="text-justify text-lg font-normal my-5">
            Context API (Application Programming Interface) is a react structure
            that allows us to use the structure as a global variables with
            values that can be passed around the component tree and assist in
            solving prop-drilling from all levels of application.
            <br />
            Context is designed to share data that can be considered “global”
            for a tree of React components, such as the current authenticated
            user, theme, or preferred language. Context is primarily used when
            some data needs to be accessible by many components at different
            nesting levels.
          </p>
        </article>
        <article className="p-5 my-10 mx-auto bg-[#EBFAEF] border-2 border-green-100 rounded-md shadow-lg">
          <h2 className="mt-3 text-3xl font-medium">What is semantic tag?</h2>
          <p className="text-justify text-lg font-normal my-5">
            Semantic tag or semantic HTML elements are those that clearly
            describe their meaning in a human- and machine-readable way.
            Elements such as header, footer and article are all considered
            semantic because they accurately describe the purpose of the element
            and the type of content that is inside them. Some common semantic
            elements are:{" "}
            <b>
              article, aside, details, figcaption, figure, footer, header, main,
              mark, nav, section, summary, time
            </b>{" "}
            etc. Elements such as header, nav, section, article, aside, footer
            act more like etc. Elements such as{" "}
            <b>header, nav, section, article, aside, footer</b> act more like{" "}
            <b>div</b> elements. They group other elements together into page
            sections.
          </p>
        </article>
        <article className="p-5 my-10 mx-auto bg-[#EBFAEF] border-2 border-green-100 rounded-md shadow-lg">
          <h2 className="mt-3 mb-6 text-3xl font-medium">
            Differences among inline - block - inline-block?
          </h2>
          <div className="text-justify text-lg font-normal my-5 grid grid-cols-3 gap-6">
            <div>
              <p className="text-center my-2">
                <b>inline</b>
              </p>
              <p>
                Having inline property will display an element as an inline
                element. Any height and width properties will have no effect.
                The element doesn’t start on a new line and only occupy just the
                width it requires. We can’t set the width or height. Few
                elements that have a default inline property are:{" "}
                <b>span, a, img</b>
              </p>
            </div>
            <div>
              <p className="text-center my-2">
                <b>inline-block</b>
              </p>
              <p>
                Having inline-block property will display an element as an
                inline-level block container. It’s formatted just like the
                inline element, where it doesn’t start on a new line. We can set
                height and width values.
              </p>
            </div>
            <div>
              <p className="text-center my-2">
                <b>block</b>
              </p>
              <p>
                Having block property will display an element as block
                container. The element will start on a new line and occupy the
                full width available. And we can set width and height values.
                Few elements that have a default inline property are:{" "}
                <b>div, h1, p, li, section</b>
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Blogs;
