import Link from "next/link";
import { useRouter } from "next/router";
export function TopBar({}) {
  return (
    <div className="bg-primary-100 py-2 text-center text-white">
      <div className="text-center text-sm sm:text-base italic font-semibold tracking-wider text-gray-00">
        Offering nursery, primary, secondary, and IGCSE classes
      </div>
    </div>
  );
}
