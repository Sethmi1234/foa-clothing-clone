import SafeImage from "@/components/ui/SafeImage";
import Link from "next/link";
import type { OtherCollectionGroup } from "@/types";

type OtherCollectionsProps = {
  groups: OtherCollectionGroup[];
};

function CollectionArrow() {
  return (
    <svg
      width="17"
      height="12"
      viewBox="0 0 17 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden="true"
    >
      <path
        d="M11.7526 0.46967C11.4597 0.176777 10.9848 0.176777 10.6919 0.46967C10.399 0.762563 10.399 1.23744 10.6919 1.53033L15.6919 6.53033L10.6919 10.4697C10.399 10.7626 10.399 11.2374 10.6919 11.5303C10.9848 11.8232 11.4597 11.8232 11.7526 11.5303L16.7526 6.53033C16.8932 6.38968 16.9722 6.19891 16.9722 6C16.9722 5.80109 16.8932 5.61032 16.7526 5.46967L11.7526 0.46967Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function OtherCollections({ groups }: OtherCollectionsProps) {
  return (
    <section className="border-b border-t border-neutral-200 bg-white py-12 md:py-16">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <h2 className="mb-8 text-[22px] font-bold uppercase tracking-wide text-black md:mb-10 md:text-[28px]">
          OTHER COLLECTIONS
        </h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6 lg:gap-8">
          {groups.map((group) => (
            <div key={group.id} className="group">
              <Link href={group.href} className="block" title={group.label}>
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-white">
                  <SafeImage
                    src={group.image}
                    alt={group.label}
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </Link>

              <Link
                href={group.href}
                className="mt-3 flex items-center gap-3 text-black transition-opacity group-hover:opacity-70"
                title={group.label}
              >
                <span className="shrink-0 text-[13px] font-bold uppercase tracking-wide md:text-[14px]">
                  {group.label}
                </span>
                <span className="h-px flex-1 bg-neutral-300" />
                <CollectionArrow />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
