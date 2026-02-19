import { motion } from "framer-motion";
import { useState } from "react";
import PropTypes from "prop-types";
import { useTheme } from "../../../contexts/ThemeContext";
import { getThemeFocusRing } from "../../../utils/accessibility";

// Animation variants (kept the same)
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const hoverVariants = {
  rest: { y: 0, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
  hover: { y: -8, scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } },
};

const CertificationCard = ({ cert, index }) => {
  const { currentTheme } = useTheme();
  const [showAllTags, setShowAllTags] = useState(false);

  const handleTagsToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowAllTags((prev) => !prev);
  };

  const handleCardClick = () => {
    if (cert.credentialUrl) {
      window.open(cert.credentialUrl, "_blank", "noopener,noreferrer");
    }
  };

  const getCardStyles = () => {
    switch (currentTheme) {
      case "minimal":
        return {
          card: "bg-white border-gray-200 shadow-lg hover:shadow-xl hover:border-gray-300",
          title: "text-gray-900",
          description: "text-gray-600",
          date: "bg-blue-50 text-blue-700 border-blue-200",
          tagBadge: "bg-gray-100 text-gray-700 border-gray-200",
          tagButton: "bg-gray-100 hover:bg-gray-200 text-gray-700",
          button: "bg-blue-600 hover:bg-blue-700 text-white",
          link: "text-blue-600 hover:text-blue-700",
        };
      case "neon":
        return {
          card: "bg-black border-cyan-500/30 shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/30 hover:border-cyan-400/50",
          title: "text-white",
          description: "text-gray-300",
          date: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
          tagBadge: "bg-purple-500/20 text-purple-300 border-purple-500/30",
          tagButton: "bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300",
          button:
            "bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white",
          link: "text-cyan-400 hover:text-cyan-300",
        };
      case "corporate":
        return {
          card: "bg-slate-50 border-blue-200 shadow-lg hover:shadow-xl hover:border-blue-300",
          title: "text-slate-900",
          description: "text-slate-600",
          date: "bg-blue-50 text-blue-700 border-blue-200",
          tagBadge: "bg-indigo-50 text-indigo-700 border-indigo-200",
          tagButton: "bg-blue-50 hover:bg-blue-100 text-blue-700",
          button: "bg-blue-600 hover:bg-blue-700 text-white",
          link: "text-blue-600 hover:text-blue-700",
        };
      default:
        return {
          card: "bg-neutral-800 border-neutral-700 shadow-lg hover:shadow-2xl hover:border-neutral-600 shadow-black/20",
          title: "text-white",
          description: "text-neutral-300",
          date: "bg-purple-500/20 text-purple-300 border-purple-500/30",
          tagBadge: "bg-blue-500/20 text-blue-300 border-blue-500/30",
          tagButton: "bg-purple-500/20 hover:bg-purple-500/30 text-purple-300",
          button:
            "bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 text-white",
          link: "text-purple-400 hover:text-purple-300",
        };
    }
  };

  const styles = getCardStyles();
  const maxTagsVisible = 3;
  const visibleTags = showAllTags ? cert.tags : cert.tags?.slice(0, maxTagsVisible) || [];
  const hasMoreTags = cert.tags && cert.tags.length > maxTagsVisible;

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.1 }}
      className="relative h-full group"
    >
      <motion.div
        variants={hoverVariants}
        initial="rest"
        whileHover="hover"
        className="h-full cursor-pointer"
        onClick={handleCardClick}
      >
        <article
          className={`rounded-xl border flex flex-col h-full transition-all duration-300 overflow-hidden ${styles.card}`}
          style={{ minHeight: "460px" }} // slightly taller to fit image nicely
        >
          {/* Certificate Image at the top – like in Projects */}
          {cert.backgroundImage && (
            <div className="relative w-full h-60 overflow-hidden rounded-t-xl">
              <img
                src={cert.backgroundImage}
                alt={`${cert.title} certificate preview`}
                className="w-full h-full object-contain transition-trans transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Optional subtle gradient overlay on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
            </div>
          )}

          {/* Card content */}
          <div className="flex flex-col flex-1 p-6">
            {/* Date Badge */}
            <div className="flex justify-between items-start mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-medium border ${styles.date}`}>
                {cert.formattedDate || "Date"}
              </span>
              <span className="text-lg opacity-90">🏆</span>
            </div>

            {/* Issuer */}
            <p className="text-sm opacity-75 mb-1">{cert.issuer}</p>

            {/* Title */}
            <h3 className={`text-xl font-bold mb-3 line-clamp-2 ${styles.title}`}>
              {cert.title}
            </h3>

            {/* Description */}
            <p className={`text-sm mb-6 flex-1 line-clamp-4 ${styles.description}`}>
              {cert.description}
            </p>

            {/* Tags */}
            {cert.tags && cert.tags.length > 0 && (
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {visibleTags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 rounded text-xs border ${styles.tagBadge}`}
                    >
                      {tag}
                    </span>
                  ))}
                  {hasMoreTags && (
                    <button
                      onClick={handleTagsToggle}
                      className={`px-3 py-1 rounded text-xs border transition-colors ${styles.tagButton} ${getThemeFocusRing(currentTheme)}`}
                    >
                      {showAllTags ? "Show less" : `+${cert.tags.length - maxTagsVisible} more`}
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* View Credential Button */}
            <div className="mt-auto">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full px-4 py-3 rounded-lg text-sm font-medium transition-all ${styles.button} ${getThemeFocusRing(currentTheme)}`}
                aria-label={`View credential for ${cert.title}`}
              >
                View Credential →
              </motion.button>
            </div>
          </div>
        </article>
      </motion.div>

      {/* Hover indicator */}
      <div
        className={`absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none ${
          currentTheme === "minimal" ? "text-gray-400" : "text-neutral-500"
        }`}
      >
        <span className="text-xs">↗</span>
      </div>
    </motion.div>
  );
};

CertificationCard.propTypes = {
  cert: PropTypes.shape({
    title: PropTypes.string.isRequired,
    issuer: PropTypes.string.isRequired,
    formattedDate: PropTypes.string.isRequired,
    description: PropTypes.string,
    credentialUrl: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    backgroundImage: PropTypes.string,
  }).isRequired,
  index: PropTypes.number,
};

export default CertificationCard;