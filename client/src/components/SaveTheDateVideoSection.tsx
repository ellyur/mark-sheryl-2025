
import { motion } from 'framer-motion';
import { Video, Clock } from 'lucide-react';

const SaveTheDateVideoSection = () => {
  return (
    <motion.section 
      id="save-the-date-video" 
      className="section-pastel-blue bg-background py-20 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 border border-primary/30 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 border border-primary/30 rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Header */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-light text-primary mb-4">
            Save The Date Video
          </h2>
          <p className="text-lg text-muted-foreground font-light tracking-wide">
            A special video message from us to you
          </p>
        </motion.div>

        {/* Coming Soon Card */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
        >
          {/* Decorative background layers */}
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl blur-xl opacity-60" />
          <div className="absolute -inset-2 bg-card/30 backdrop-blur-sm rounded-xl" />
          
          {/* Main Content Card */}
          <div className="relative bg-white rounded-2xl p-12 md:p-16 shadow-xl border border-primary/20">
            <div className="flex flex-col items-center justify-center space-y-6">
              {/* Video Icon with Animation */}
              <motion.div
                className="relative"
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                  <Video className="w-12 h-12 text-primary" />
                </div>
                {/* Pulse effect */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-primary/20"
                  animate={{ 
                    scale: [1, 1.4, 1],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                />
              </motion.div>

              {/* Coming Soon Text */}
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <h3 className="text-2xl md:text-3xl font-display font-light text-primary">
                    Coming Soon
                  </h3>
                </div>
                <p className="text-base md:text-lg text-muted-foreground max-w-md">
                  We're working on something special for you. Our save the date video will be available soon!
                </p>
              </div>

              {/* Decorative line */}
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent rounded-full" />
              
              {/* Additional message */}
              <p className="text-sm text-muted-foreground/80 italic">
                Stay tuned for updates
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SaveTheDateVideoSection;
