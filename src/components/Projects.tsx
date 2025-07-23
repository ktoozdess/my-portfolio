const projects = [
  {
    title: 'Real Estate Search App',
    description: 'Search and filter rental properties in Italy. React + MongoDB + Node.js.',
    link: 'https://github.com/your-username/real-estate-app',
  },
  {
    title: 'Crypto Wallet UI',
    description: 'A sleek web interface for a decentralized crypto wallet.',
    link: 'https://github.com/your-username/crypto-wallet',
  },
]

const Projects = () => (
  <section className="max-w-3xl mx-auto py-12 px-4">
    <h2 className="text-3xl font-bold mb-6">Projects</h2>
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((proj) => (
        <a
          key={proj.title}
          href={proj.link}
          target="_blank"
          className="border p-4 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          <h3 className="text-xl font-semibold">{proj.title}</h3>
          <p className="text-sm mt-2">{proj.description}</p>
        </a>
      ))}
    </div>
  </section>
)

export default Projects
