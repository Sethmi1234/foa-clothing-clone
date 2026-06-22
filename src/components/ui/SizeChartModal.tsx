"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CloseIcon } from "@/components/icons/CloseIcon";

type SizeChartModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const sizeChartData = [
  { size: "XS", chest: "33-34", waist: "27-28", hip: "34-35", inseam: "29" },
  { size: "S", chest: "35-36", waist: "29-30", hip: "36-37", inseam: "30" },
  { size: "M", chest: "37-38", waist: "31-32", hip: "38-39", inseam: "31" },
  { size: "L", chest: "39-40", waist: "33-34", hip: "40-41", inseam: "32" },
  { size: "XL", chest: "41-42", waist: "35-36", hip: "42-43", inseam: "33" },
  { size: "2XL", chest: "43-44", waist: "37-38", hip: "44-45", inseam: "34" },
  { size: "3XL", chest: "45-46", waist: "39-40", hip: "46-47", inseam: "35" },
];

const sizeChartDataCm = [
  { size: "XS", chest: "84-86", waist: "69-71", hip: "86-89", inseam: "74" },
  { size: "S", chest: "89-91", waist: "74-76", hip: "91-94", inseam: "76" },
  { size: "M", chest: "94-97", waist: "79-81", hip: "97-99", inseam: "79" },
  { size: "L", chest: "99-102", waist: "84-86", hip: "102-104", inseam: "81" },
  { size: "XL", chest: "104-107", waist: "89-91", hip: "107-109", inseam: "84" },
  { size: "2XL", chest: "109-112", waist: "94-97", hip: "112-114", inseam: "86" },
  { size: "3XL", chest: "114-117", waist: "99-102", hip: "117-119", inseam: "89" },
];

export default function SizeChartModal({ isOpen, onClose }: SizeChartModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-black/50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-4 z-[100] mx-auto my-auto flex max-h-[90vh] max-w-[700px] flex-col overflow-y-auto bg-white p-6 md:inset-auto md:p-10"
          >
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-[18px] font-bold uppercase tracking-[0.04em] text-black">
                Size Guide
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="text-black transition-opacity hover:opacity-70"
                aria-label="Close size chart"
              >
                <CloseIcon />
              </button>
            </div>

            <div className="space-y-10">
              <div>
                <h3 className="mb-3 text-[13px] font-semibold uppercase tracking-[0.06em] text-neutral-500">
                  Measurements in inches
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-[12px]">
                    <thead>
                      <tr className="border-b border-neutral-300">
                        <th className="py-2.5 pr-4 text-left font-bold uppercase text-black">Size</th>
                        <th className="py-2.5 pr-4 text-left font-bold uppercase text-black">Chest</th>
                        <th className="py-2.5 pr-4 text-left font-bold uppercase text-black">Waist</th>
                        <th className="py-2.5 pr-4 text-left font-bold uppercase text-black">Hip</th>
                        <th className="py-2.5 text-left font-bold uppercase text-black">Inseam</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sizeChartData.map((row) => (
                        <tr key={row.size} className="border-b border-neutral-100">
                          <td className="py-2.5 pr-4 font-semibold text-black">{row.size}</td>
                          <td className="py-2.5 pr-4 text-neutral-600">{row.chest}</td>
                          <td className="py-2.5 pr-4 text-neutral-600">{row.waist}</td>
                          <td className="py-2.5 pr-4 text-neutral-600">{row.hip}</td>
                          <td className="py-2.5 text-neutral-600">{row.inseam}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-[13px] font-semibold uppercase tracking-[0.06em] text-neutral-500">
                  Measurements in centimeters
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-[12px]">
                    <thead>
                      <tr className="border-b border-neutral-300">
                        <th className="py-2.5 pr-4 text-left font-bold uppercase text-black">Size</th>
                        <th className="py-2.5 pr-4 text-left font-bold uppercase text-black">Chest</th>
                        <th className="py-2.5 pr-4 text-left font-bold uppercase text-black">Waist</th>
                        <th className="py-2.5 pr-4 text-left font-bold uppercase text-black">Hip</th>
                        <th className="py-2.5 text-left font-bold uppercase text-black">Inseam</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sizeChartDataCm.map((row) => (
                        <tr key={row.size} className="border-b border-neutral-100">
                          <td className="py-2.5 pr-4 font-semibold text-black">{row.size}</td>
                          <td className="py-2.5 pr-4 text-neutral-600">{row.chest}</td>
                          <td className="py-2.5 pr-4 text-neutral-600">{row.waist}</td>
                          <td className="py-2.5 pr-4 text-neutral-600">{row.hip}</td>
                          <td className="py-2.5 text-neutral-600">{row.inseam}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="border-t border-neutral-200 pt-6">
                <h4 className="mb-2 text-[12px] font-semibold uppercase tracking-[0.06em] text-black">
                  How to measure
                </h4>
                <ul className="space-y-1 text-[12px] leading-relaxed text-neutral-600">
                  <li>
                    <strong className="text-black">Chest:</strong> Measure around the fullest part of your chest, keeping the tape parallel to the floor.
                  </li>
                  <li>
                    <strong className="text-black">Waist:</strong> Measure around your natural waistline (the narrowest part of your torso).
                  </li>
                  <li>
                    <strong className="text-black">Hip:</strong> Measure around the fullest part of your hips, keeping the tape parallel to the floor.
                  </li>
                  <li>
                    <strong className="text-black">Inseam:</strong> Measure from the top of your inner thigh down to the bottom of your ankle.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}