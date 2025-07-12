// components/Skill.jsx
import React from 'react'
import skills from '../components/Skills.js'
import SkillCard from './SkillCard'

const Skill = () => {
   return (
    <section className="mt-32 px-4 sm:px-6 w-full">
      <h2 className="text-5xl font-extrabold mb-12 text-center text-black dark:text-white">
        Skills
      </h2>

      {/* Force single-column on mobile */}
      <div className="grid grid-cols-1 gap-8">
        {skills.map((skillGroup, index) => (
          <div key={index} className="w-full">
            <SkillCard category={skillGroup.category} items={skillGroup.items} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skill
