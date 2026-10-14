import Image from "next/image";

import { cn } from "@/lib/utils";
import { assetPath } from "@/lib/assets";

type BrandMarkProps = {
  className?: string;
  priority?: boolean;
};

export function BrandMark({ className, priority = false }: BrandMarkProps) {
  return (
    <Image
      src={assetPath("/images/jienzi-africa-logo.png")}
      alt="JiEnzi Africa"
      width={486}
      height={102}
      priority={priority}
      className={cn("h-auto", className)}
    />
  );
}
