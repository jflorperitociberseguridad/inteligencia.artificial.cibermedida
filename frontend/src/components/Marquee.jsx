import { MARQUEE_ITEMS } from "@/data/content";

export const Marquee = () => {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div data-testid="editorial-marquee" className="relative border-y border-[#3FE0F2]/15 bg-[#1B1E4E] py-5 overflow-hidden">
      <div className="marquee-track flex whitespace-nowrap w-max">
        {items.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="font-heading text-sm sm:text-base uppercase tracking-[0.3em] text-[#7D86C2] px-6">
              {item}
            </span>
            <span className="text-[#3FE0F2] text-xs">◆</span>          </span>
        ))}
      </div>
    </div>
  );
};
