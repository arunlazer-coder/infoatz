import { CheckCircle2 } from "lucide-react";

const features = [
  "Expert team with decade+ experience",
  "Agile development methodology",
  "24/7 dedicated support",
  "Transparent communication",
  "Scalable & secure solutions",
  "On-time project delivery",
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="relative">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              We Build Technology That{" "}
              <span className="text-gradient">Matters</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Infoatz Solutions is a forward-thinking technology company dedicated to 
              delivering innovative software solutions. With a passion for excellence 
              and a commitment to client success, we transform complex challenges into 
              elegant, scalable solutions.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our team of skilled developers, designers, and strategists work 
              collaboratively to bring your vision to life, ensuring every project 
              exceeds expectations.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border border-border bg-card p-8">
              {/* Abstract Tech Visual */}
              <div className="aspect-square relative">
                {/* Floating Elements */}
                <div className="absolute top-8 left-8 w-20 h-20 rounded-2xl bg-primary/20 animate-float" />
                <div className="absolute top-16 right-12 w-16 h-16 rounded-full bg-accent/30 animate-float" style={{ animationDelay: '1s' }} />
                <div className="absolute bottom-20 left-16 w-12 h-12 rounded-lg bg-primary/10 animate-float" style={{ animationDelay: '2s' }} />
                <div className="absolute bottom-8 right-8 w-24 h-24 rounded-3xl bg-primary/15 animate-float" style={{ animationDelay: '0.5s' }} />
                
                {/* Center Element */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 rounded-full border-2 border-primary/30 flex items-center justify-center">
                    <div className="w-28 h-28 rounded-full border-2 border-primary/50 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-2xl">I</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <line x1="50" y1="50" x2="200" y2="200" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.2" />
                  <line x1="350" y1="100" x2="200" y2="200" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.2" />
                  <line x1="100" y1="350" x2="200" y2="200" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.2" />
                  <line x1="320" y1="320" x2="200" y2="200" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.2" />
                </svg>
              </div>
            </div>
            
            {/* Decorative Blur */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
