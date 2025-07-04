import React from 'react'
import { MapPin } from "lucide-react";


const projects = [
  {
    title: "Siyaram Vitrified PVT. LTD",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUfkskHZU7Dni6ZiXBjc7wd32IJHiY47aOFw&s",
    capacity: "3.5 MW",
    location: "Jamwanthali (Jamnagar), Gujarat",
    progress: 100,
  },
  {
    title: "Siyaram Vitrified PVT. LTD",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS21b3AoOv2Ks9tvav-c5DYb6HM73KKj4aLLQ&s",
    capacity: "3.5 MW",
    location: "Jamwanthali (Jamnagar), Gujarat",
    progress: 100,
  },
  {
    title: "Siyaram Vitrified PVT. LTD",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS21b3AoOv2Ks9tvav-c5DYb6HM73KKj4aLLQ&s",
    capacity: "3.5 MW",
    location: "Jamwanthali (Jamnagar), Gujarat",
    progress: 100,
  },
  {
    title: "Siyaram Vitrified PVT. LTD",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUfkskHZU7Dni6ZiXBjc7wd32IJHiY47aOFw&s",
    capacity: "3.5 MW",
    location: "Jamwanthali (Jamnagar), Gujarat",
    progress: 100,
  },
  {
    title: "Siyaram Vitrified PVT. LTD",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS21b3AoOv2Ks9tvav-c5DYb6HM73KKj4aLLQ&s",
    capacity: "3.5 MW",
    location: "Jamwanthali (Jamnagar), Gujarat",
    progress: 100,
  },
  {
    title: "Siyaram Vitrified PVT. LTD",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUfkskHZU7Dni6ZiXBjc7wd32IJHiY47aOFw&s",
    capacity: "3.5 MW",
    location: "Jamwanthali (Jamnagar), Gujarat",
    progress: 100,
  },
];

const Projects = () => {
  return (
  <>
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] overflow-hidden">
        <img
          src="https://t3.ftcdn.net/jpg/06/58/93/12/360_F_658931267_W9QK8mbF8NvK8MrXrkek4MYE8Lr1RixM.jpg"
          alt="Hero"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white bg-black/40">
          <h1 className="text-4xl font-bold">Projects</h1>
          <p className="max-w-2xl mt-4 text-sm md:text-base">
            Explore Our Portfolio of Solar Projects, showcasing our commitment to innovative and sustainable energy solutions.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="px-4 py-12 mx-auto max-w-7xl">
        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="w-[300px] border rounded-xl shadow-sm hover:shadow-lg transition-all"
            >
              <div className="h-40 overflow-hidden rounded-t-xl">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <h2 className="mb-2 text-base font-bold text-sky-900">{proj.title}</h2>

                <div className="mb-2 text-sm text-gray-700">Project Progress</div>
                <div className="w-full h-2 mb-1 overflow-hidden bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-green-600"
                    style={{ width: `${proj.progress}%` }}
                  ></div>
                </div>
                <div className="text-xs font-semibold text-right">{proj.progress}%</div>

                <div className="mt-4 space-y-2 text-sm text-gray-800">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-3 h-3 bg-green-600 rounded-full" />
                    Capacity: {proj.capacity}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-gray-700" />
                    {proj.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
  )
}

export default Projects
