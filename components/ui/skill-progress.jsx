export function SkillProgress({ skill, level }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-soft-blue-100">{skill}</span>
        <span className="text-sm font-medium text-soft-blue-100">{level}%</span>
      </div>
      <div className="w-full bg-soft-blue-700 rounded-full h-2.5 dark:bg-soft-blue-700">
        <div
          className="bg-white h-2.5 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
}
