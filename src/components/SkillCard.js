import React from 'react'

const SkillCard = ({ category, items }) => {
  return (
    <div className="w-full p-6 rounded-2xl shadow-xl border border-white/20 bg-gradient-to-br from-[#ffffffcc] via-[#b0b0b0aa] to-[#000000cc] dark:from-[#1a1a1acc] dark:via-[#2a2a2a88] dark:to-[#0d0d0dcc] backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl overflow-hidden">
      <h3 className="text-2xl font-bold mb-4 text-black dark:text-white break-words">{category}</h3>
      <ul className="flex flex-wrap gap-3">
        {items.map((skill, index) => (
          <li
            key={index}
            className="px-4 py-1 text-sm font-medium rounded-full bg-gradient-to-tr from-white via-gray-300 to-gray-500 dark:from-gray-700 dark:via-gray-600 dark:to-gray-800 text-black dark:text-white shadow-sm transition-all duration-300 hover:scale-105 hover:bg-gradient-to-br hover:from-blue-200 hover:to-purple-400 dark:hover:from-blue-800 dark:hover:to-purple-700 hover:text-black dark:hover:text-white cursor-pointer break-words"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SkillCard
