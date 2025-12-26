'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function ReviewsSection() {
  const reviews = [
    {
      name: "Althaf Haaris",
      designation: "Director – Machma College",
      photo: "/reviews/althaf_haaris.png",
      review: "Axxiom Technologies provided an Institute Management System that strengthened how we handle day to day institute operations. Record keeping, coordination and administrative tracking are now clearer and faster, which has reduced manual effort significantly. Strong execution and dependable support throughout."
    },
    {
      name: "Althaf Haaris",
      designation: "Director – Machma College",
      photo: "/reviews/althaf_haaris.png",
      review: "The Learning Management System which Axxiom Technologies delivered has made our teaching and learning process far more organized. Tutors can manage lessons and materials easily and students can follow everything without confusion. It is a smooth, user friendly system that has improved academic delivery in a practical way."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, reviews.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="relative w-full overflow-hidden bg-black text-white py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.03),transparent_70%)]" />
        {/* SVG glow accents */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg
            className="absolute -top-32 left-1/2 h-[800px] w-[1600px] -translate-x-1/2 opacity-15"
            viewBox="0 0 1200 600"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="reviewsGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f5f5f5" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#d4d4d4" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#a3a3a3" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="reviewsGradient2" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fafafa" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#c7c7c7" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#8f8f8f" stopOpacity="0.08" />
              </linearGradient>
              <filter id="reviewsBlur" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="80" edgeMode="duplicate" />
              </filter>
            </defs>
            <g filter="url(#reviewsBlur)">
              <path
                d="M0 260C150 120 330 340 520 300C710 260 870 60 1200 160V0H0Z"
                fill="url(#reviewsGradient1)"
              />
              <path
                d="M0 520C220 600 430 430 640 520C850 610 1030 560 1200 460V600H0Z"
                fill="url(#reviewsGradient2)"
              />
            </g>
          </svg>

          <svg
            className="absolute bottom-[-140px] right-[-80px] h-[420px] w-[420px] opacity-20"
            viewBox="0 0 400 400"
            aria-hidden="true"
          >
            <defs>
              <radialGradient id="reviewsRadial" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f5f5f5" stopOpacity="0.05" />
                <stop offset="100%" stopColor="#f5f5f5" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="reviewsStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d1d1d1" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#7a7a7a" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <circle cx="200" cy="200" r="160" fill="url(#reviewsRadial)" />
            <circle cx="200" cy="200" r="150" stroke="url(#reviewsStroke)" strokeWidth="1.5" fill="none" strokeDasharray="12 14" />
            <circle cx="200" cy="200" r="115" stroke="url(#reviewsStroke)" strokeWidth="1" fill="none" strokeDasharray="6 10" opacity="0.6" />
            <path
              d="M60 220C130 160 230 200 320 150"
              stroke="url(#reviewsStroke)"
              strokeWidth="1.2"
              strokeLinecap="round"
              fill="none"
              opacity="0.6"
            />
            <path
              d="M80 120C150 170 260 140 320 200"
              stroke="url(#reviewsStroke)"
              strokeWidth="1"
              strokeLinecap="round"
              fill="none"
              opacity="0.45"
              strokeDasharray="4 8"
            />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <span className="text-xs font-light tracking-[0.3em] text-white/60 uppercase">
              Testimonials
            </span>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-base text-white/60 max-w-2xl mx-auto">
            Don't just take our word for it - hear from the businesses we've helped transform
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="max-w-4xl mx-auto">
                    <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 md:p-12 backdrop-blur-xl">
                      {/* Quote Icon */}
                      <div className="absolute -top-6 left-8">
                        <div className="rounded-full bg-white p-4 shadow-xl">
                          <Quote className="h-8 w-8 text-black" fill="black" />
                        </div>
                      </div>

                      {/* Review Text */}
                      <div className="mt-8 mb-8">
                        <p className="text-lg md:text-xl text-white/90 leading-relaxed italic">
                          "{review.review}"
                        </p>
                      </div>

                      {/* Reviewer Info */}
                      <div className="flex items-center gap-4">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/20 bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                          <Image
                            src={review.photo}
                            alt={review.name}
                            width={64}
                            height={64}
                            className="object-cover w-full h-full"
                            priority={index === 0}
                            quality={90}
                            unoptimized
                          />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white">
                            {review.name}
                          </h4>
                          <p className="text-sm text-white/60">
                            {review.designation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:translate-x-0 rounded-full border border-white/20 bg-black/50 p-3 text-white backdrop-blur-xl transition-all hover:bg-white/10 hover:border-white/40"
            aria-label="Previous review"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-0 rounded-full border border-white/20 bg-black/50 p-3 text-white backdrop-blur-xl transition-all hover:bg-white/10 hover:border-white/40"
            aria-label="Next review"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-white'
                    : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
