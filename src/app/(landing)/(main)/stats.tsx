const STATS = [
  {
    title: 'Years',
    value: '10+',
  },
  {
    title: 'Projects',
    value: '994+',
  },
  {
    title: 'Volunteers',
    value: '5688+',
  },
];


const Stats = () => (
    <div className="bg-white w-full flex justify-center">
        <div className="container mx-auto flex gap-16 p-10 w-min">
            {STATS.map((stat, index) => (
                <>
                    <div key={index} className="flex  items-center justify-center gap-4">
                        <div className="text-5xl font-bold opacity-80">{stat.value}</div>
                        <div className="opacity-50 text-3xl">{stat.title}</div>
                    </div>
                    {index !== STATS.length - 1 && (
                        <div className="border-r border-gray-200"></div>
                    )}  
                </>
            ))}
        </div>
    </div>
);

export default Stats;