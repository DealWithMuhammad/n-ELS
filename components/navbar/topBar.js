import Link from "next/link";
import { useRouter } from "next/router";
export function TopBar({}) {
  return (
    <div className="bg-primary-100 py-2 text-center text-white">
      <div className="text-center text-base font-semibold tracking-wider text-gray-00">
        Together we can make a difference
      </div>
    </div>
  );
}
