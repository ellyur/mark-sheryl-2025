
import { motion } from 'framer-motion';

const MemorableMomentsSection = () => {
  const prenupPhotos = [
    {
      url: 'https://res.cloudinary.com/dmsfwzg3d/image/upload/v1763783713/1_prenup_p7agur.jpg',
      alt: 'Prenup Photo 1'
    },
    {
      url: 'https://res.cloudinary.com/dmsfwzg3d/image/upload/v1763783714/2_prenup_tigpep.jpg',
      alt: 'Prenup Photo 2'
    },
    {
      url: 'https://res.cloudinary.com/dmsfwzg3d/image/upload/v1763783730/3_prenup_fqk8dv.jpg',
      alt: 'Prenup Photo 3'
    },
    {
      url: 'https://res.cloudinary.com/dmsfwzg3d/image/upload/v1763783748/4_prenup_at1m7o.jpg',
      alt: 'Prenup Photo 4'
    },
    {
      url: 'https://res.cloudinary.com/dmsfwzg3d/image/upload/v1763783748/6_prenup_h8cthn.jpg',
      alt: 'Prenup Photo 5'
    },
    {
      url: 'https://res.cloudinary.com/dmsfwzg3d/image/upload/v1763783748/5_prenup_muheb8.jpg',
      alt: 'Prenup Photo 6'
    },
    {
      url: 'https://res.cloudinary.com/dmsfwzg3d/image/upload/v1763783749/8_prenup_ejv9at.jpg',
      alt: 'Prenup Photo 7'
    },
    {
      url: 'https://res.cloudinary.com/dmsfwzg3d/image/upload/v1763783749/11_prenup_wsz23f.jpg',
      alt: 'Prenup Photo 8'
    },
    {
      url: 'https://res.cloudinary.com/dmsfwzg3d/image/upload/v1763783749/7_prenup_uepjot.jpg',
      alt: 'Prenup Photo 9'
    },
    {
      url: 'https://res.cloudinary.com/dmsfwzg3d/image/upload/v1763783750/10_prenup_yc23lq.jpg',
      alt: 'Prenup Photo 10'
    },
    {
      url: 'https://res.cloudinary.com/dmsfwzg3d/image/upload/v1763783750/9_prenup_pbjyvo.jpg',
      alt: 'Prenup Photo 11'
    },
    {
      url: 'https://res.cloudinary.com/dmsfwzg3d/image/upload/v1763783756/12_prenup_z14ldh.jpg',
      alt: 'Prenup Photo 12'
    }
  ];

  return (
    <motion.section 
      id="memorable-moments" 
      className="section-hard-blue bg-white relative overflow-hidden py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-light text-primary mb-4" data-testid="text-prenup-header">Save The Date Photos</h2>
          <p className="text-lg text-muted-foreground font-light tracking-wide">
            Capturing our journey together
          </p>
        </motion.div>

        {/* Pinterest-style Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {prenupPhotos.map((photo, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 break-inside-avoid mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              data-testid={`prenup-photo-${index}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default MemorableMomentsSection;
