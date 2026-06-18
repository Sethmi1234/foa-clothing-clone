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
          <div key={item.id} className="border-b border-neutral-200">
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="flex w-full items-center justify-between py-5 text-left"
            >
              <span className="pr-4 text-[13px] font-medium uppercase tracking-[0.04em] text-black">
                {item.title}
              </span>
              <span className="text-xl leading-none text-black">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && item.content && (
              <p className="pb-5 text-[14px] leading-relaxed text-neutral-600">{item.content}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
