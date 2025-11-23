import { motion } from 'framer-motion';

const EntourageSection = () => {
  const entourageData = {
    grandparents: {
      title: "With heartfelt gratitude for their grandparents",
      entries: [
        {
          left: ["Luis Loman (+)", "(Barlig, Mt. Province)", "Christina Anayasan Sepulchre (+)", "(Bauko, Mt. Province)"],
          right: ["Silvino \"Aklatan\" Manodon (+)", "Felomina \"Tebyed\" Benito (+)", "(Sagada, Mt. Province)"]
        },
        {
          left: ["Vicente \"Nabehet\" Yogyog (+)", "Cuyango Dumanghi (+)", "(Ifugao)"],
          right: ["John Calpi Biag (+)", "(Demang, Sagada)", "Alice Sawaden Dis-iw", "(Payeo, Besao)"]
        }
      ]
    },
    parents: [
      { label: "Parents of the groom:", names: ["Mr. Roldan Sepulchre Loman (+)", "Mrs. Naty Nabehet Loman"] },
      { label: "Parents of the bride:", names: ["Mr. Cyril Dis-iw Biag", "Mrs. Dominga Manodon Biag"] }
    ],
    officiating: {
      pastor: "Ptr. Jonathan Mandapat",
      vocalist: "Ms. Ingrid Payaket"
    },
    principalSponsors: {
      title: "To stand as Principal Sponsors & witnesses to our marriage vows",
      couples: [
        { man: "LT Gen Nelson M. Allaga (AFP Ret.)", woman: "Mrs. Jennilyn M. Allaga" },
        { man: "Hon. Atty. Nicasio M. Aliping Jr.", woman: "Ms. Remedious D. Manalansan" },
        { man: "Mr. Alex H. Baguiwa", woman: "Mrs. Nelly P. Baguiwa" },
        { man: "PCOL Mario Baquiran Jr.", woman: "PLT Merlyn Baquiran" },
        { man: "Brgy. Capt. Victor O. Benlingan Jr.", woman: "Mrs. Remedios C. Tongawan" },
        { man: "Mr. James A. Benos", woman: "Mrs. Theodora Benos" },
        { man: "Exec. Dir. David B. Bungallon", woman: "Mrs. Daisy C. Bungallon" },
        { man: "Mr. Roy Calpi", woman: "Mrs. Darlyn Calpi" },
        { man: "Hon. Vladimir Diamsay T. Cayabas", woman: "Ms. Sharon M. Limangan" },
        { man: "Ptr. Rufino Chungalao Jr.", woman: "Mrs. Aurora Chungalao" },
        { man: "Engr. Francis B. Cuyop", woman: "Mrs. Ruby M. Cuyop" },
        { man: "Hon. Gov. Jerry U. Dalipog", woman: "Mrs. Angelina H. Dalipog" },
        { man: "Mr. Manuel Diagan Jr.", woman: "Mrs. Milagros Diagan" },
        { man: "Hon. Atty. Vladimir Jimenez", woman: "Ms. Michelline Inay" },
        { man: "Engr. Paul B. Lomas-e", woman: "Mrs. Agnes Lomas-e" },
        { man: "Mr. Victor Luglug", woman: "Mrs. Nora B. Luglug" },
        { man: "Mr. Jeoffrey Tacio", woman: "Mrs. Charen Tacio" },
        { man: "Mr. Eduard Folayang", woman: "Mrs. Genevieve Folayang" },
        { man: "Hon. Mayor Benjamin B. Magalong", woman: "Mrs. Arlene S. Magalong" },
        { man: "Engr. Ronnie Montoya", woman: "Mrs. Beverly Montoya" },
        { man: "Mr. Leoncio J. Manodon", woman: "Ms. Lolita B. Moe" },
        { man: "Mr. Robert J. Manodon", woman: "Mrs. Josephine S. Girao" },
        { man: "Mr. Teodoro Marcelo", woman: "Mrs. Adele Olive Marcelo" },
        { man: "Mr. Benjamin Nanam", woman: "Mrs. Andrea Nanam" },
        { man: "Ret. Fiscal Elmer Sagsago", woman: "Mrs. Ellen D. Dominguez" },
        { man: "Mr. Hilarion Torres", woman: "Mrs. Selah Torres" },
        { man: "Maj. Robert B. Mangyao GSC PA (Res)", woman: "Ms. Carol B. Domogan" },
        { man: "Engr. David Paul Chin Rufino", woman: "Mrs. Charie G. Rufino" }
      ]
    },
    secondarySponsors: {
      title: "Secondary Sponsors",
      roles: [
        { role: "Candle", subtitle: "To light our path", names: ["Stephen Rayne Loman", "Janine Loman"] },
        { role: "Veil", subtitle: "To clothe us as one", names: ["Jeremy Pacatiw", "Marjorie Pacatiw"] },
        { role: "Cord", subtitle: "To bind us together", names: ["Joshua Pacio", "Annalyn Balungay"] }
      ]
    },
    bestMan: { name: "Shervand Loman", role: "Best Man" },
    maidOfHonor: { name: "Alice Manodon Biag", role: "Maid of Honor" },
    bridesmaids: [
      "Eunice Nabehet",
      "Khassandra Narciza",
      "Ellysa Venice Loman",
      "Kiesha Aimee Bugnosen",
      "Jhonah Grace Nabehet",
      "Zinnia Biag",
      "Cristy Zhea Cariño",
      "Crysvianna Panes"
    ],
    groomsmen: [
      "Ron Garcia",
      "Carl Loman",
      "Alfonso Manodon Jr.",
      "Blaire Dumar",
      "Cyril Biag Jr.",
      "Eirjhon Joe Nabehet",
      "Yong Jian",
      "Danny Kingad"
    ],
    additionalRoles: {
      ringBearer: { name: "Xian David Bugnosen", subtitle: "To carry our symbol of love" },
      coinBearer: { name: "Lancelot Bascyllis", subtitle: "To carry our symbol of treasures" },
      bibleBearer: { name: "Kayden Mikhail Loman", subtitle: "To carry our symbol of faith" },
      flowerGirls: {
        subtitle: "To shower our aisle with flowers",
        names: [
          "Khatelyn Loman",
          "Iris Nabehet",
          "Yesha Loman",
          "Adrielle Candace Gavan",
          "Kyrie Sophia Loman",
          "Yola Mariann Jimenez",
          "Audrie Therese Cuchapin",
          "Tya Ma. Claire Jimenez",
          "Inarah Zipporah Gavan"
        ]
      }
    }
  };

  return (
    <motion.section 
      id="entourage" 
      className="entourage-section section-hard-blue bg-white relative overflow-hidden py-8 md:py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 8.5 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 border border-primary/30 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 border border-primary/30 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-gold-bright mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.5 }}
        >
          Entourage
        </motion.h2>

        {/* Grandparents */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.8 }}
        >
          <h3 className="text-base md:text-xl lg:text-2xl font-telma font-bold italic mb-6 md:mb-8 text-muted-foreground" data-testid="grandparents-title">
            With heartfelt gratitude for our <span className="font-bold">grandparents</span>
          </h3>
          <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
            {entourageData.grandparents.entries.map((entry, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8" data-testid={`grandparent-entry-${index}`}>
                <div className="text-center md:text-right space-y-0.5">
                  {entry.left.map((line, lineIndex) => (
                    <p key={lineIndex} className={`text-xs md:text-base lg:text-lg font-telma ${line.startsWith('(') ? 'text-muted-foreground italic' : 'text-foreground'}`}>
                      {line}
                    </p>
                  ))}
                </div>
                <div className="text-center md:text-left space-y-0.5">
                  {entry.right.map((line, lineIndex) => (
                    <p key={lineIndex} className={`text-xs md:text-base lg:text-lg font-telma ${line.startsWith('(') ? 'text-muted-foreground italic' : 'text-foreground'}`}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Separator */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.9 }}
        >
          <p className="text-sm md:text-base font-telma text-foreground">And with our beloved parents</p>
        </motion.div>

        {/* Parents */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.0 }}
        >
          <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            {entourageData.parents.map((parent, index) => (
              <div key={index} className="text-center" data-testid={`parents-section-${index}`}>
                <h3 className="text-sm md:text-lg lg:text-xl font-telma mb-2 md:mb-3 text-primary">
                  <span className="font-bold">{parent.label}</span>
                </h3>
                {parent.names.map((name, nameIndex) => (
                  <p key={nameIndex} className="text-xs md:text-base lg:text-lg font-telma text-foreground mb-1" data-testid={`parent-name-${index}-${nameIndex}`}>
                    {name}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Officiating */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.1 }}
        >
          <div className="max-w-4xl mx-auto space-y-2 text-center">
            <p className="text-xs md:text-base lg:text-lg font-telma text-foreground">
              <span className="font-bold">Officiating Minister:</span> {entourageData.officiating.pastor}
            </p>
            <p className="text-xs md:text-base lg:text-lg font-telma text-foreground">
              <span className="font-bold">Wedding Vocalist:</span> {entourageData.officiating.vocalist}
            </p>
          </div>
        </motion.div>

        {/* Principal Sponsors */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.2 }}
        >
          <h3 className="text-base md:text-lg lg:text-xl font-telma mb-4 md:mb-6 text-foreground" data-testid="principal-sponsors-title">
            To stand as <span className="font-bold">Principal Sponsors</span> & witnesses to our marriage vows
          </h3>
          <div className="max-w-4xl mx-auto space-y-2">
            {entourageData.principalSponsors.couples.map((couple, index) => (
              <div key={index} className="grid grid-cols-2 gap-4 md:gap-8" data-testid={`principal-sponsor-couple-${index}`}>
                <p className="text-xs md:text-base lg:text-lg font-telma text-foreground text-right" data-testid={`principal-sponsor-couple-man-${index}`}>
                  {couple.man}
                </p>
                <p className="text-xs md:text-base lg:text-lg font-telma text-foreground text-left" data-testid={`principal-sponsor-couple-woman-${index}`}>
                  {couple.woman}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* To assist as with our needs */}
        <motion.div 
          className="mb-4 md:mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.3 }}
        >
          <p className="text-sm md:text-base font-telma text-foreground italic">To assist as with our needs</p>
        </motion.div>

        {/* Best Man and Maid of Honor */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.4 }}
        >
          <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            <div className="text-center" data-testid="best-man-section">
              <p className="text-xs md:text-base lg:text-lg font-telma text-foreground">
                <span className="font-bold">{entourageData.bestMan.role}:</span> {entourageData.bestMan.name}
              </p>
            </div>
            <div className="text-center" data-testid="maid-of-honor-section">
              <p className="text-xs md:text-base lg:text-lg font-telma text-foreground">
                <span className="font-bold">{entourageData.maidOfHonor.role}:</span> {entourageData.maidOfHonor.name}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Secondary Sponsors */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.5 }}
        >
          <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-black mb-4 md:mb-6 text-primary" data-testid="secondary-sponsors-title">
            {entourageData.secondarySponsors.title}
          </h3>
          <div className="max-w-4xl mx-auto space-y-4">
            {entourageData.secondarySponsors.roles.map((item, index) => (
              <div key={index} className="text-center" data-testid={`secondary-sponsor-${item.role.toLowerCase()}`}>
                <h4 className="text-sm md:text-lg lg:text-xl font-telma text-primary">
                  <span className="font-bold">{item.role}</span> {item.subtitle && `| ${item.subtitle}`}
                </h4>
                <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-2xl mx-auto mt-2">
                  {item.names.map((name, nameIndex) => (
                    <p key={nameIndex} className="text-xs md:text-base lg:text-lg font-telma text-foreground" data-testid={`${item.role.toLowerCase()}-name-${nameIndex}`}>
                      {name}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bridesmaids & Groomsmen */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.6 }}
        >
          <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            <div className="text-center" data-testid="bridesmaids-section">
              <h3 className="text-lg md:text-2xl lg:text-3xl font-telma text-primary mb-3 md:mb-6">
                <span className="font-bold">Bridesmaids:</span>
              </h3>
              {entourageData.bridesmaids.map((name, index) => (
                <p key={index} className="text-xs md:text-base lg:text-lg font-telma text-foreground mb-1" data-testid={`bridesmaid-${index}`}>
                  {name}
                </p>
              ))}
            </div>
            <div className="text-center" data-testid="groomsmen-section">
              <h3 className="text-lg md:text-2xl lg:text-3xl font-telma text-primary mb-3 md:mb-6">
                <span className="font-bold">Groomsmen:</span>
              </h3>
              {entourageData.groomsmen.map((name, index) => (
                <p key={index} className="text-xs md:text-base lg:text-lg font-telma text-foreground mb-1" data-testid={`groomsman-${index}`}>
                  {name}
                </p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Additional Roles */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.7 }}
        >
          <div className="max-w-4xl mx-auto space-y-4">
            {/* Ring Bearer */}
            <div className="text-center">
              <h4 className="text-sm md:text-lg font-telma text-primary"><span className="font-bold">Ring Bearer</span></h4>
              <p className="text-xs md:text-sm text-muted-foreground italic">{entourageData.additionalRoles.ringBearer.subtitle}</p>
              <p className="text-xs md:text-base lg:text-lg font-telma text-foreground mt-1">{entourageData.additionalRoles.ringBearer.name}</p>
            </div>

            {/* Coin Bearer */}
            <div className="text-center">
              <h4 className="text-sm md:text-lg font-telma text-primary"><span className="font-bold">Coin Bearer</span></h4>
              <p className="text-xs md:text-sm text-muted-foreground italic">{entourageData.additionalRoles.coinBearer.subtitle}</p>
              <p className="text-xs md:text-base lg:text-lg font-telma text-foreground mt-1">{entourageData.additionalRoles.coinBearer.name}</p>
            </div>

            {/* Bible Bearer */}
            <div className="text-center">
              <h4 className="text-sm md:text-lg font-telma text-primary"><span className="font-bold">Bible Bearer:</span></h4>
              <p className="text-xs md:text-sm text-muted-foreground italic">{entourageData.additionalRoles.bibleBearer.subtitle}</p>
              <p className="text-xs md:text-base lg:text-lg font-telma text-foreground mt-1">{entourageData.additionalRoles.bibleBearer.name}</p>
            </div>

            {/* Flower Girls */}
            <div className="text-center">
              <h4 className="text-sm md:text-lg font-telma text-primary"><span className="font-bold">Flower girls</span></h4>
              <p className="text-xs md:text-sm text-muted-foreground italic">{entourageData.additionalRoles.flowerGirls.subtitle}</p>
              <div className="mt-2 space-y-1">
                {entourageData.additionalRoles.flowerGirls.names.map((name, index) => (
                  <p key={index} className="text-xs md:text-base lg:text-lg font-telma text-foreground">
                    {name}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EntourageSection;
