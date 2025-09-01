import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const Gallery = () => {
  const galleryItems = [
    {
      image: gallery1,
      title: "Elegant Evening Dress",
      category: "Custom Stitching"
    },
    {
      image: gallery2,
      title: "Premium Men's Suit",
      category: "Formal Wear"
    },
    {
      image: gallery3,
      title: "Bridal Collection",
      category: "Wedding Attire"
    },
    {
      image: gallery4,
      title: "Traditional Wear",
      category: "Ethnic Clothing"
    },
    {
      image: gallery5,
      title: "Business Attire",
      category: "Professional Wear"
    },
    {
      image: gallery6,
      title: "Casual Alterations",
      category: "Alterations"
    }
  ];

  return (
    <section id="gallery" className="py-20 section-gradient">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Work Gallery
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our portfolio of beautiful garments crafted with precision and care. 
            Each piece represents our commitment to excellence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-secondary font-medium">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Want to see more of our work? Visit our showroom or check out our social media.
          </p>
          <button className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-3 rounded-full font-semibold transition-all duration-300 hover-glow">
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;