import Link from 'next/link';

const Landing = () => (
    <div className="grid grid-cols-2 min-h-[calc(100vh-80px)] w-full mx-auto container">
        <div className="flex flex-col justify-center">
            <h1 className="text-2xl font-bold text-primary">Student Social Responsibility</h1>
            <p className="text-primary/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            <div className="flex gap-4 mt-4">
                <Link href="/project" className="bg-primary hover:bg-blue-700 text-white px-4 py-2 rounded-lg">See Projects</Link>
                <Link href="/contact" className="bg-primary/10 hover:bg-primary/40 text-primary px-4 py-2 rounded-lg">Contact us</Link>
            </div>
        </div>
        <div className="relative flex items-center">
            <svg
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[38rem] h-[38rem] text-primary"
            >
                <path
                    d="M83.5,65.5Q75,81,57.5,86.5Q40,92,27,79.5Q14,67,13,49.5Q12,32,27,23.5Q42,15,61,13.5Q80,12,86,31Q92,50,83.5,65.5Z"
                    stroke="none"
                    strokeWidth="0"
                    fill="currentColor"
                ></path>
            </svg>
            <svg
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[38rem] h-[38rem] text-primary/60 absolute top-1/2 left-1/2 mt-14 transition transform -translate-x-1/2 -translate-y-1/2"
            >
                <path
                    d="M83.5,65.5Q75,81,57.5,86.5Q40,92,27,79.5Q14,67,13,49.5Q12,32,27,23.5Q42,15,61,13.5Q80,12,86,31Q92,50,83.5,65.5Z"
                    stroke="none"
                    strokeWidth="0"
                    fill="currentColor"
                ></path>
            </svg>
        </div>
    </div>
);

export default Landing;