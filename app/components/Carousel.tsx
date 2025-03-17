import { useState, useEffect, useRef, JSX } from "react";

type SlideContent = {
  id: string;
  content: JSX.Element;
};

export function Carousel({ slides }: { slides: SlideContent[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout>(null);

  // 自动播放控制
  const startAutoPlay = () => {
    intervalRef.current = setInterval(handleNext, 5000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleNext = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };

  // 滚动到当前幻灯片
  useEffect(() => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.clientWidth;
      carouselRef.current.scrollTo({
        left: slideWidth * currentSlide,
        behavior: "smooth"
      });
    }
  }, [currentSlide]);

  // 自动播放逻辑
  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  return (
    <div 
      className="carousel w-full relative"
      ref={carouselRef}
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          id={slide.id}
          className="carousel-item relative w-full"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="w-full p-4">
            {slide.content}
          </div>

          {/* 导航控制 */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-1">
            <div className="flex items-center space-x-2 bottom ">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-3 h-3 rounded-full ${
                    i === currentSlide ? "bg-primary" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <button
              onClick={handlePrev}
              className="btn btn-circle shadow-lg hover:scale-110 transition-transform"
            >
              ❮
            </button>
            <div className="flex items-center space-x-2 bottom ">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-3 h-3 rounded-full ${
                    i === currentSlide ? "bg-primary" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="btn btn-circle shadow-lg hover:scale-110 transition-transform"
            >
              ❯
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

// 使用示例
export function DemoCarousel() {
  const slides: SlideContent[] = [
    {
      id: "feature-1",
      content: (
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 rounded-xl">
          <h2 className="text-4xl font-bold mb-4">Feature 1</h2>
          <p className="text-lg mb-6">Interactive dashboard with real-time analytics</p>
          <button className="btn btn-outline btn-accent">
            Learn More →
          </button>
        </div>
      )
    },
    {
      id: "feature-2",
      content: (
        <div className="bg-gradient-to-r from-green-500 to-cyan-500 text-white p-8 rounded-xl">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-4">Feature 2</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>Advanced data visualization</li>
                <li>Custom report generation</li>
                <li>Team collaboration tools</li>
              </ul>
            </div>
            <div className="flex-1 bg-white/20 rounded-lg p-4">
              <img 
                src="/chart-demo.svg" 
                className="w-full h-48 object-contain" 
                alt="Chart preview"
              />
            </div>
          </div>
        </div>
      )
    }
  ];

  return <Carousel slides={slides} />;
}