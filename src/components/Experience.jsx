import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      company: "Lyrebird",
      role: "Full Stack Software Engineer",
      period: "05/2025 — 05/2026",
      desc: "Spearheaded the design and implementation of highly scalable web applications and serverless architectures using Python and React. Architected secure, high-performance RESTful APIs leveraging Java and Spring Boot within a Hexagonal Architecture framework. Automated complex workflows and data pipelines, integrating RD Station CRM and Meta Ads for optimized performance. Engineered real-time analytics dashboards in Power BI, processing large-scale datasets to drive strategic business decisions. Championed the adoption of AI tools, drastically reducing operational bottlenecks and accelerating deployment cycles across cross-functional teams."
    }
  ];

  const education = [
    {
      inst: "Centro Universitário FAG",
      course: "Bachelor's Degree in Software Engineering",
      period: "01/2024 — 12/2027"
    },
    {
      inst: "Instituto Federal do Paraná",
      course: "Technical Degree in IT",
      period: "01/2020 — 12/2023"
    }
  ];

  return (
    <section id="experience" className="py-24 bg-red-600 px-6 lg:px-12 text-black border-y-8 border-black">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b-8 border-black pb-4">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none text-white">Experience</h2>
          <span className="text-black font-black uppercase tracking-widest text-xl">Career</span>
        </div>

        <div className="flex flex-col gap-8 mb-24">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="border-4 border-black bg-white p-8 md:p-12 hover:bg-black hover:text-white transition-colors duration-300 group"
            >
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center border-b-4 border-black group-hover:border-white pb-6 mb-6 transition-colors">
                <div>
                  <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-2">{exp.company}</h3>
                  <p className="text-red-600 font-bold uppercase tracking-widest text-lg">{exp.role}</p>
                </div>
                <div className="mt-4 lg:mt-0 bg-black group-hover:bg-red-600 text-white px-6 py-2 font-black uppercase transition-colors">
                  {exp.period}
                </div>
              </div>
              <p className="text-lg md:text-xl font-bold uppercase tracking-tight leading-relaxed max-w-5xl text-gray-800 group-hover:text-gray-300">
                {exp.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b-8 border-black pb-4">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none text-white">Education</h2>
          <span className="text-black font-black uppercase tracking-widest text-xl">Academic</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-4 border-black bg-black text-white p-8 md:p-10 flex flex-col justify-between min-h-[250px]"
            >
              <div>
                <span className="text-red-600 font-black uppercase tracking-widest text-sm mb-4 block">Institution</span>
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none mb-6">{edu.inst}</h3>
              </div>
              <div>
                <p className="font-bold uppercase tracking-widest text-lg mb-4">{edu.course}</p>
                <div className="inline-block bg-white text-black px-4 py-1 font-black uppercase text-sm">
                  {edu.period}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}