import { motion } from "framer-motion";
import CertificationCard from "./CertificationCard";  
import { certifications } from "../../../constants/certifications";

const CertificationsSection = () => {
  console.log("Loaded certifications:", certifications); 

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Professional credentials and continuous learning achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={cert.id || index}
              cert={cert}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};


export default CertificationsSection;