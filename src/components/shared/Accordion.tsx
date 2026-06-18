"use client";

import { useState } from "react";

type AccordionItem = {
  id: string;
  title: string;
  content?: string;
};

type AccordionProps = {
  items: AccordionItem[];
  className?: string;
};

export default function Accordion({ items, className = "" }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className={className}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="border-b border-[#e2e2e2]">
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="text-[14px] font-medium normal-case tracking-normal text-[#151515]">
                {item.title}
              </span>
              <span className="relative h-4 w-4 shrink-0">
                <span
                  className={`absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 bg-[#151515] transition-transform ${
                    isOpen ? "rotate-0" : ""
                  }`}
                />
                <span
                  className={`absolute left-1/2 top-1/2 h-4 w-px -translate-x-1/2 -translate-y-1/2 bg-[#151515] transition-transform ${
                    isOpen ? "rotate-90 opacity-0" : "opacity-100"
                  }`}
                />
              </span>
            </button>
            {isOpen && item.content && (
              <div className="pb-5 text-[14px] leading-relaxed text-[#8e8e8e]">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
