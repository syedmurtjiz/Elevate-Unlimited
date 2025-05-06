'use client';
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SectionFour = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1.35,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  };

  const cards = [
    {
      image: "/eid.png",
      bgColor: "bg-[#CCDDD7]",
      title: ["STRESS", "RELIEF AND", "RELAXATION"],
      description: [
        "Find calm and clarity in the midst of life's",
        "chaos. These meditations are perfect for",
        "unwinding after a long day or soothing a",
        "busy mind."
      ]
    },
    {
      image: "/jeffseid.png",
      bgColor: "bg-[#E5D6CD]",
      title: ["MINDFUL", "MOVEMENT", "PRACTICE"],
      description: [
        "Transform your daily walks into",
        "moments of mindfulness. Learn to",
        "be present with each step and",
        "breath you take."
      ]
    },
    {
      image: "/eid.png",
      bgColor: "bg-[#D6E5CD]",
      title: ["INNER", "PEACE &", "HARMONY"],
      description: [
        "Discover the sanctuary within yourself.",
        "These meditations guide you towards",
        "deep inner peace and emotional",
        "balance."
      ]
    },
    {
      image: "/jeffseid.png",
      bgColor: "bg-[#CDD6E5]",
      title: ["PERSONAL", "GROWTH &", "AWARENESS"],
      description: [
        "Embark on a journey of self-discovery.",
        "These meditations help you unlock your",
        "potential and expand your consciousness",
        "through mindful practice."
      ]
    }
  ];

  return (
    <div className="relative py-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="slider-container px-4 md:px-8">
          <Slider {...settings}>
            {cards.map((card, index) => (
              <div key={index} className="outline-none">
                <div className="pr-4 md:pr-6">
                  <div className="flex flex-col md:flex-row rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-300 hover:scale-[1.02]">
                    <div className="w-full md:w-1/2 relative h-48 md:h-[441px] overflow-hidden">
                      <img 
                        src={card.image} 
                        alt={card.title[0]} 
                        className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110" 
                      />
                    </div>
                    
                    <div className={`w-full md:w-1/2 ${card.bgColor} flex flex-col justify-center p-8 md:p-10`}>
                      <h2 className="text-2xl md:text-3xl font-light text-center text-gray-700 tracking-wider mb-6">
                        {card.title.map((line, i) => (
                          <React.Fragment key={i}>
                            {line}<br/>
                          </React.Fragment>
                        ))}
                      </h2>
                      
                      <p className="text-gray-600 text-center text-base md:text-lg leading-relaxed">
                        {card.description.map((line, i) => (
                          <React.Fragment key={i}>
                            {line}<br/>
                          </React.Fragment>
                        ))}
                      </p>
                      
                      <div className="flex justify-end mt-8">
                        <div className="w-16 h-20 relative transform transition-transform duration-300 hover:scale-110">
                          <img src="/wedico.png" alt="Custom Icon" className="w-full h-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style jsx global>{`
        .slick-list {
          overflow: visible !important;
          margin-right: -25% !important;
        }
        .slick-track {
          padding: 1rem 0;
        }
        .slick-dots {
          bottom: -3rem;
        }
        .slick-dots li button:before {
          font-size: 10px;
          color: #888;
          opacity: 0.5;
          transition: all 0.3s ease;
        }
        .slick-dots li.slick-active button:before {
          color: #333;
          opacity: 1;
          transform: scale(1.2);
        }
        .slick-prev, .slick-next {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          z-index: 1;
          transition: all 0.3s ease;
        }
        .slick-prev:hover, .slick-next:hover {
          background: white;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transform: scale(1.1);
        }
        .slick-prev {
          left: 1rem;
        }
        .slick-next {
          right: 1rem;
        }
        .slick-prev:before, .slick-next:before {
          color: #333;
          font-size: 20px;
        }
        @media (max-width: 768px) {
          .slick-list {
            margin-right: 0 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default SectionFour;