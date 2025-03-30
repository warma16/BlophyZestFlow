import { useState, useEffect, useRef } from "react";

export type Slide = {
  id: string;
  background: string;
  content: React.ReactNode;
};

export type CarouselProps = {
  slides: Slide[];
  width?: string;
  height?: string;
  addingClassName?: string;
};

export function Carousel({ slides, width = "", height = "",addingClassName="" }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);

  // 自动播放控制
  const startAutoPlay = () => {
    intervalRef.current = setInterval(handleNext, 5000);
  };

  const stopAutoPlay = () => {
    intervalRef.current && clearInterval(intervalRef.current);
  };

  const handleNext = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };

  // 处理指示点点击
  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  // 自动播放逻辑
  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, []);
  useEffect(() => {
    if (slideRef.current) {
      const slideWidth = slideRef.current.clientWidth;
      slideRef.current.scrollTo({
        left: slideWidth * currentSlide,
        behavior: "smooth"
      });
    }
  }, [currentSlide]);

  return (
    <div 
      className={`absolute overflow-hidden ${addingClassName}`}
      ref={containerRef}
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      {/* 幻灯片内容 */}
      <div className="relative h-full transition-transform duration-500">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 ${index === currentSlide ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
            ref={slideRef}
          >
            {/* 背景层 */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.background})` }}
            />
            
            {/* 内容遮罩层 */}
            <div className="absolute inset-0 bg-black/30" />
            
            {/* 内容容器 */}
            <div className="relative h-full flex items-center justify-center text-white">
              {slide.content}
            </div>
          </div>
        ))}
      </div>

      {/* 导航按钮 */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 btn btn-circle shadow-lg bg-white/30 hover:bg-white/50 backdrop-blur-sm"
      >
        ❮
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 btn btn-circle shadow-lg bg-white/30 hover:bg-white/50 backdrop-blur-sm"
      >
        ❯
      </button>

      {/* 指示点 */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide 
                ? 'bg-white shadow-md' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// 使用示例
export function DemoCarousel() {
  const slides: Slide[] = [
    {
      id: "slide-1",
      background: "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
      content: (
        <div className="text-center max-w-2xl">
          <h2 className="text-4xl font-bold mb-4">Discover New Features</h2>
          <p className="text-xl mb-6">Explore our latest updates and improvements</p>
          <button className="btn btn-primary px-8">Get Started</button>
        </div>
      )
    },
    {
      id: "slide-2",
      background: "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
      content: (
        <div className="flex items-center gap-8 p-6">
          <div className="flex-1">
            <h3 className="text-3xl font-bold mb-4">Advanced Analytics</h3>
            <p className="text-lg mb-4">Deep insights into your data with real-time monitoring</p>
            <div className="stats shadow bg-white/20 text-white">
              <div className="stat">
                <div className="stat-title">Active Users</div>
                <div className="stat-value">89.4%</div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <Carousel 
      slides={slides}
      addingClassName="left w-1/2 h-1/2"
    />
  );
}