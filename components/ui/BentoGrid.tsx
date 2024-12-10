import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

interface BentoGridItemProps {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: BentoGridItemProps) => {
  return (
    <div
      className={cn(
        "row-span-1 relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div className={cn(id === 6 && "flex justify-center", "h-full")}>
        {img && (
          <div className="w-full h-full absolute">
            <img
              src={img}
              alt={title || "Image"}
              className={`object-center object-cover ${imgClassName || ""}`}
            />
          </div>
        )}
        {spareImg && (
          <div className={`absolute right-0 -bottom-5 ${id === 5 ? "w-full opacity-80" : ""}`}>
            <img
              src={spareImg}
              alt={title || "Spare Image"}
              className="object-center object-cover w-full h-full"
            />
          </div>
        )}
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold">
              {title}
            </div>
          </BackgroundGradientAnimation>
        )}
      </div>

      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className={`font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 ${titleClassName || ""}`}>
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
