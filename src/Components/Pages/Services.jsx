export function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies.",
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android.",
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment services.",
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that users love.",
    },
  ];

  return (
    <div>
      <h1>Our Services</h1>
      <p style={{ color: "#666", marginBottom: "30px" }}>
        We offer a wide range of digital solutions.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {services.map((service) => (
          <div
            key={service.title}
            style={{
              backgroundColor: "white",
              padding: "30px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ marginTop: 0 }}>{service.title}</h3>
            <p style={{ color: "#666", margin: 0 }}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
