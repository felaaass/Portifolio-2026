import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      id: "01",
      title: "Seahawks Analytics",
      desc: "Efficiency analysis of draft picks comparing invested capital against actual career return.",
      tech: ["Python", "ML", "Pandas"],
      link: "https://github.com/felaaass/seahawks-draft-roi-analytics",
      short: "ROI"
    },
    {
      id: "02",
      title: "DLQ Auditor Service",
      desc: "Automated service for auditing and processing Dead Letter Queue messages in cloud architectures.",
      tech: ["Java", "Spring Boot", "AWS SQS"],
      link: "https://github.com/felaaass/servico_auditor_dlq",
      short: "DLQ"
    },
    {
      id: "03",
      title: "Payment Consumer",
      desc: "High-throughput message consumer for processing distributed payment transactions securely.",
      tech: ["Java", "Hexagonal Arch", "Messaging"],
      link: "https://github.com/felaaass/Consumidor-de-pagamentos-processados",
      short: "PAY"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-[#f4f4f0] px-6 lg:px-12 text-black border-t-8 border-black">
      <div className="max-w-7xl mx-auto">
        <div className="border-b-8 border-black pb-4 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">Projects</h2>
          <span className="text-red-600 font-black uppercase tracking-widest text-xl">View All</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col border-4 border-black bg-white hover:bg-black transition-colors duration-300"
            >
              <div className="h-48 border-b-4 border-black flex items-center justify-center bg-[#0a0a0a] overflow-hidden relative">
                <span className="text-8xl font-black text-red-600 opacity-20 transform -rotate-12 group-hover:scale-110 transition-transform duration-700">
                  {item.short}
                </span>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-red-600 font-black text-2xl group-hover:text-red-500">{item.id}</span>
                  <h3 className="text-2xl font-black uppercase group-hover:text-white leading-tight text-right w-2/3">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 font-medium group-hover:text-gray-400 mb-6 flex-grow">
                  {item.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {item.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 border-2 border-black text-xs font-bold uppercase group-hover:border-white group-hover:text-white">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}