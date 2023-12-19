import Landing from './landing';
import Stats from './stats';
import About from './about';
import HowWeWork from './how-we-work';
import Testimonials from './testimonials';

const LandingPage = () => {
  return (
      <div className="items-center justify-center h-full flex flex-col">
          <Landing />
          <Stats />
          <About />
          <HowWeWork />
          <Testimonials />
      </div>
  );
};

export default LandingPage;