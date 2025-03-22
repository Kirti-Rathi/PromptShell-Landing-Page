import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

export default function Platform() {
  const platforms = [
    {
      name: "Linux",
      icon: "/platform-icons/linux.png",
      width: 80,
      height: 80,
    },
    {
      name: "Windows",
      icon: "/platform-icons/windows.png",
      width: 120,
      height: 120,
    },
    {
      name: "macOS",
      icon: "/platform-icons/macos.png",
      width: 50,
      height: 50,
    },
  ];

  return (
    <div className="relative mt-24 flex w-full flex-col items-center justify-center overflow-hidden">
      {/* <h3 className="text-lg text-foreground/40 font-semibold text-center mb-4">
        Seamless Integration Across Major Platforms
      </h3> */}
      <Marquee className="[--duration:5s]" pauseOnHover>
        {platforms.map((platform, index) => (
          <div
            key={index}
            className="relative h-14 w-32 flex items-center justify-center"
          >
            <Image
              src={platform.icon}
              alt={`${platform.name} icon`}
              width={platform.width || 64}
              height={platform.height || 64}
              className="object-contain"
            />
          </div>
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:5s]" pauseOnHover>
        {platforms.map((platform, index) => (
          <div
            key={index}
            className="relative h-14 w-32 flex items-center justify-center"
          >
            <Image
              src={platform.icon}
              alt={`${platform.name} icon`}
              width={platform.width || 64}
              height={platform.height || 64}
              className="object-contain"
            />
          </div>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
