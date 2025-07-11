import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Project = {
  title: string;
  description: string;
  tags: string[];
};

interface ProjectRotatorProps {
  projects: Project[];
}

const ProjectRotator: React.FC<ProjectRotatorProps> = ({ projects }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      breakpoints={{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="pb-12"
    >
      {projects.map((project, index) => (
        <SwiperSlide key={index}>
          <div className="bg-gradient-to-br from-fuchsia-900/70 to-cyan-800/20 text-white p-6 rounded-xl shadow-lg h-full flex flex-col justify-between space-y-4 hover:scale-[1.02] transition-all duration-300 ease-in-out">
            <h3 className="text-xl font-bold text-fuchsia-300">{project.title}</h3>
            <p className="text-sm text-gray-300">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag, i) => (
                <span key={i} className="bg-fuchsia-800/40 px-3 py-1 rounded-full text-xs font-mono border border-fuchsia-400">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectRotator;
