const About = () => {
  return (
    <div className="min-h-screen bg-[#F1F1F1]">
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-light text-[#1A1F2C] mb-12 tracking-tight">
          About
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-[#8A898C] mb-8">
            Signal Studios is a creative collective dedicated to capturing moments and telling stories through visual artistry. Our work spans across various mediums, from photography to digital design.
          </p>
          
          <h2 className="text-2xl font-light text-[#1A1F2C] mt-12 mb-6">Our Story</h2>
          <p className="text-[#8A898C] mb-8">
            Founded in 2024, Signal Studios emerged from a passion for visual storytelling and a desire to create meaningful connections through art. Our team brings together diverse perspectives and skills to create compelling visual narratives.
          </p>
          
          <h2 className="text-2xl font-light text-[#1A1F2C] mt-12 mb-6">Our Approach</h2>
          <p className="text-[#8A898C]">
            We believe in the power of authentic storytelling and thoughtful design. Every project we undertake is approached with careful consideration of its unique context and objectives, ensuring that each piece we create resonates with its intended audience.
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;