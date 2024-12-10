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
      style={{
        background: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
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

        <div className={cn(
            titleClassName, 'group-hover/benito:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:-10'
        )}>
            <div className="font-sans font-light text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
                {description}
            </div>
            <div className={`font-sans font-bold text-lg lg:text-3xl max-w-96 z-10  ${titleClassName || ""}`}>
          {title}
        </div>
        </div>

      </div>
    </div>
  );
};
