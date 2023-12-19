const HowWeWork = () => {
  return (
      <div className="flex flex-col items-center justify-center h-full">
          <div className="flex flex-col items-center justify-center w-full max-w-[1200px] px-4 py-16">
              <div className="text-4xl font-bold text-center">How we work</div>
              <div className="text-xl text-center opacity-50 mt-4">
                  We are a non-profit organization that is run by volunteers. We are
                  always looking for more people to join our team.
              </div>
              <div className="flex flex-col md:flex-row gap-8 mt-16">
                  <div className="flex flex-col items-center justify-center">
                      <div className="text-3xl font-bold">1</div>
                      <div className="text-xl font-bold mt-4">Apply</div>
                      <div className="text-xl opacity-50 mt-4 text-center">
                          Fill out the application form and we will get back to you as
                          soon as possible.
                      </div>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                      <div className="text-3xl font-bold">2</div>
                      <div className="text-xl font-bold mt-4">Interview</div>
                      <div className="text-xl opacity-50 mt-4 text-center">
                          We will schedule an interview with you to get to know you
                          better.
                      </div>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                      <div className="text-3xl font-bold">3</div>
                      <div className="text-xl font-bold mt-4">Start</div>
                      <div className="text-xl opacity-50 mt-4 text-center">
                          Once you are accepted, you can start working on projects.
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default HowWeWork;