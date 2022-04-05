import React from "react";

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-5xl font-medium my-10">
        Welcome to <span className="text-[#00cba9]">Review Hub</span>
      </h1>
      <p className="text-xl mx-auto w-3/4">
        Review Hub is one of the best gadget review platform in the world
        allowing users to share their user experience and personal opinions.
      </p>
      <div className="my-5 text-gray-800">
        <article className="p-5 my-10 mx-auto bg-[#EBFAEF] border-2 border-green-100 rounded-md shadow-lg">
          <h2 className="mt-3 text-3xl font-medium">Our Mission and Vision</h2>
          <p className="text-justify text-lg font-normal my-5">
            We, Review Hub community started our journey with the mission to
            help people share their user experience of their daily electronic
            gadgets. As an user, choosing the correct product that provides the
            best service is very important. Our mission is to help ourselves as
            a community with suggestions, ideas, question and answers and most
            importantly, user experiences. Review Hub inspires every people to
            support and help others with our platform so that people can make
            the best choice.
          </p>
        </article>

        <article className="p-5 my-10 mx-auto bg-[#EBFAEF] border-2 border-green-100 rounded-md shadow-lg">
          <h2 className="mt-3 text-3xl font-medium">Privacy Practices</h2>
          <p className="text-justify text-lg font-normal my-5">
            We understand the importance of safeguarding your personal
            information and we have formulated a Privacy Policy, to ensure that
            your personal information is sufficiently protected. Apart from
            these Terms of Use, the Privacy Policy shall also govern your visit
            and use of the Site. Your continued use of the Site implies that you
            have read and accepted the Privacy Policy and agree to be bound by
            its terms and conditions. You consent to the use of personal
            information by the Company in accordance with the terms of and
            purposes set forth in the Privacy Policy, the same may be subject to
            amendment from time to time at the sole discretion of the Company.
          </p>
        </article>
      </div>
    </div>
  );
};

export default About;
