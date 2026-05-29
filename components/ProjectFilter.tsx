import { ProjectCategory } from "@/data/projects";

export type ProjectFilterValue = "All" | ProjectCategory;

type ProjectFilterProps = {
  activeFilter: ProjectFilterValue;
  onChange: (filter: ProjectFilterValue) => void;
};

const filters: ProjectFilterValue[] = ["All", "Offensive", "Defensive", "Tools"];

export default function ProjectFilter({
  activeFilter,
  onChange,
}: ProjectFilterProps) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          onClick={() => onChange(filter)}
          className={`min-h-11 rounded border px-4 py-2 text-sm font-semibold transition ${
            activeFilter === filter
              ? "border-[#00FF9C] bg-[#00FF9C] text-black"
              : "border-zinc-800 bg-zinc-950 text-zinc-300 hover:border-[#00FF9C]/50 hover:text-[#00FF9C]"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
