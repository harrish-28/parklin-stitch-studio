const About = () => {
  return (
    <section id="about" className="py-20 section-gradient">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            About Parklin Creation
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Crafting Quality Since Day One
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At Parklin Creation, we believe that every garment tells a story. Our passion for 
              exceptional stitching and attention to detail has made us a trusted name in custom 
              garment creation and alterations.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              With years of experience in the fashion industry, we combine traditional craftsmanship 
              with modern techniques to deliver garments that exceed expectations.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-6 card-gradient rounded-lg hover-lift">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center p-6 card-gradient rounded-lg hover-lift">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-card rounded-lg p-6 border border-border hover-lift">
              <h4 className="text-xl font-semibold text-primary mb-3">Our Mission</h4>
              <p className="text-muted-foreground">
                To provide exceptional garment stitching services that combine traditional 
                craftsmanship with contemporary style, ensuring every customer feels confident 
                and comfortable in their perfectly fitted clothing.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 border border-border hover-lift">
              <h4 className="text-xl font-semibold text-primary mb-3">Our Values</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Quality craftsmanship in every stitch
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Personalized service and attention
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Timely delivery and fair pricing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Customer satisfaction guarantee
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;