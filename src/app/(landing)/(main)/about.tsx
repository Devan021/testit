const About = () => {
  return (
      <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
              <div className="flex flex-wrap -m-4">
                  <div className="p-4 lg:w-1/2 md:w-full">
                      <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                          <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
                              <svg
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  className="w-8 h-8"
                                  viewBox="0 0 24 24"
                              >
                                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                              </svg>
                          </div>
                          <div className="flex-grow">
                              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                                  Shooting Stars
                              </h2>
                              <p className="leading-relaxed text-base">
                                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                                  taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                                  banh mi pug.
                              </p>
                              <a className="mt-3 text-blue-500 inline-flex items-center">
                                  Learn More
                                  <svg
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      className="w-4 h-4 ml-2"
                                      viewBox="0 0 24 24"
                                  >
                                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                                  </svg>
                              </a>
                          </div>
                      </div>
                  </div>
                  <div className="p-4 lg:w-1/2 md:w-full">
                      <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                          <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
                              <svg
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  className="w-8 h-8"
                                  viewBox="0 0 24 24"
                              >
                                  <circle cx="6" cy="6" r="3"></circle>
                                  <circle cx="6" cy="18" r="3"></circle>
                                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                              </svg>
                          </div>
                          <div className="flex-grow">
                              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                                  The Catalyzer
                              </h2>
                              <p className="leading-relaxed text-base">
                                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                                  taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                                  banh mi pug.
                              </p>
                              <a className="mt-3 text-blue-500 inline-flex items-center">
                                  Learn More
                                  <svg
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      className="w-4 h-4 ml-2"
                                      viewBox="0 0 24 24"
                                  >
                                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                                  </svg>
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
};
        
export default About;