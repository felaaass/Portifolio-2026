import { motion } from 'framer-motion';

export default function About() {
  const skillGroups = [
    {
      title: "Languages & Frameworks",
      skills: [
        { name: "Python", desc: "Data analytics & serverless scripts." },
        { name: "Java", desc: "REST APIs & Hexagonal Architecture." },
        { name: "JavaScript", desc: "Frontend logic & DOM manipulation." },
        { name: "TypeScript", desc: "Strongly typed development." },
        { name: "SQL", desc: "Database modeling & queries." },
        { name: "Lua", desc: "Scripting and game logic." },
        { name: "React", desc: "Component-based UIs." },
        { name: "Spring Boot", desc: "Backend microservices." },
        { name: "Node.js", desc: "Server-side automation." },
        { name: "Next.js", desc: "Server-side rendered apps." },
        { name: "Tailwind", desc: "Utility-first UI design." }
      ]
    },
    {
      title: "Data & AI",
      skills: [
        { name: "Pandas", desc: "Data manipulation." },
        { name: "NumPy", desc: "Scientific computing arrays." },
        { name: "Matplotlib", desc: "Data visualization." },
        { name: "Machine Learning", desc: "Predictive analytics models." },
        { name: "Power BI", desc: "Performance dashboards." },
        { name: "BigQuery", desc: "Large scale data querying." },
        { name: "Data Analytics", desc: "Extracting complex insights." }
      ]
    },
    {
      title: "Architecture & DevOps",
      skills: [
        { name: "Hexagonal Arch", desc: "Decoupled domain logic." },
        { name: "Microservices", desc: "Distributed scalable backends." },
        { name: "REST APIs", desc: "Secure HTTP integrations." },
        { name: "AWS", desc: "Cloud infrastructure (EC2, SQS)." },
        { name: "Docker", desc: "Application containerization." },
        { name: "CI/CD", desc: "Automated deployment pipelines." },
        { name: "GitHub Actions", desc: "Workflow automation." },
        { name: "Git", desc: "Version control management." },
        { name: "Linux", desc: "Server bash scripting." }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "PostgreSQL", desc: "Advanced relational data." },
        { name: "MySQL", desc: "Database maintenance." }
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Problem Solving", desc: "Analytical approach to challenges." },
        { name: "Leadership", desc: "Guiding project tech stack." },
        { name: "Communication", desc: "Bridging tech and business." },
        { name: "Adaptability", desc: "Mastering new frameworks." },
        { name: "Collaboration", desc: "Agile squad integration." },
        { name: "Decision Making", desc: "Data-driven architecture choices." },
        { name: "Critical Thinking", desc: "Evaluating system vulnerabilities." },
        { name: "EQ", desc: "Focus under deployment pressure." },
        { name: "Conflict Resolution", desc: "Aligning divergent opinions." },
        { name: "Agile Mindset", desc: "Iterative continuous improvement." }
      ]
    }
  ];

  return (
    <section id="about" className="bg-[#0a0a0a] text-white overflow-hidden relative">
      
      <div className="absolute top-40 left-4 hidden md:flex flex-col gap-4 opacity-20">
        <div className="w-1 h-32 bg-white"></div>
        <div className="w-1 h-8 bg-red-600"></div>
        <div className="w-1 h-4 bg-white"></div>
      </div>

      <div className="absolute bottom-40 right-4 hidden md:flex flex-col gap-4 opacity-20 items-end">
        <div className="w-8 h-1 bg-red-600"></div>
        <div className="w-32 h-1 bg-white"></div>
        <div className="w-4 h-1 bg-white"></div>
      </div>

      <div className="py-24 px-6 lg:px-12 max-w-7xl mx-auto flex flex-col gap-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative">
          <div className="md:col-span-4 border-r-0 md:border-r-4 border-white/20 pr-8">
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-4">
              About<br/><span className="text-red-600">Me</span>
            </h2>
            <p className="text-red-600 font-bold tracking-widest uppercase mt-8 border-t-4 border-red-600 pt-2 inline-block">01 // Bio</p>
          </div>
          <div className="md:col-span-8 md:pl-8 flex flex-col justify-center relative">
            <div className="absolute -top-8 -left-8 text-9xl text-white/5 font-serif hidden md:block">"</div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl font-bold leading-snug uppercase tracking-tight relative z-10"
            >
              I am a results-driven Full Stack Software Engineer building highly scalable web applications, engineering complex data pipelines, and architecting robust cloud solutions.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t-8 border-white pt-16">
          <div className="md:col-span-4 pr-8 relative">
            <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-red-600">Tech<br/>Stack</h3>
            <div className="mt-8 flex gap-2">
              <span className="w-3 h-3 bg-white block"></span>
              <span className="w-3 h-3 bg-white block"></span>
              <span className="w-3 h-3 bg-red-600 block"></span>
            </div>
            <div className="absolute bottom-0 left-0 opacity-10">
              <span className="text-9xl font-black">{'</>'}</span>
            </div>
          </div>
          <div className="md:col-span-8 md:pl-8 grid grid-cols-1 gap-16 relative z-20">
            {skillGroups.map((group, idx) => (
              <motion.div 
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h4 className="text-xl md:text-2xl font-black uppercase tracking-widest mb-8 flex items-center gap-4">
                  <span className="text-red-600">0{idx + 1}.</span> {group.title}
                  <div className="h-2 flex-grow bg-white/10"></div>
                </h4>
                <div className="flex flex-wrap gap-4 justify-start">
                  {group.skills.map((skill, skillIdx) => {
                    const isTopRow = skillIdx < group.skills.length / 2;
                    return (
                      <div key={skill.name} className="relative group cursor-crosshair">
                        <span className="px-4 py-2 border-2 border-white font-black uppercase text-xs md:text-sm group-hover:bg-red-600 group-hover:border-red-600 group-hover:text-black transition-colors block">
                          {skill.name}
                        </span>
                        
                        <div className={`absolute left-1/2 -translate-x-1/2 ${isTopRow ? 'top-full mt-2' : 'bottom-full mb-2'} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none w-48 bg-white text-black p-2 text-[10px] font-black uppercase border-4 border-black z-50 shadow-[4px_4px_0px_0px_rgba(220,38,38,1)] text-center`}>
                          {skill.desc}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}