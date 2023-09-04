import { Abel, Expletus_Sans, Ubuntu } from "next/font/google";
import localFont from "next/font/local";

const ubuntuFont = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const expletusSansFont = Expletus_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const abelFont = Abel({
  subsets: ["latin"],
  weight: ["400"],
});

const acuminProFont = localFont({
  src: [
    {
      path: "../assets/fonts/Acumin-Pro/Acumin-Regular-Pro.otf",
      weight: "700",
    },
  ],
});

export const Fonts = () => {
  return (
    <style jsx global>{`
      :root {
        --LOGO-FONT: ${expletusSansFont.style.fontFamily};
        --PRIMARY-FONT: ${ubuntuFont.style.fontFamily};
        --SECONDARY-FONT: ${abelFont.style.fontFamily};
        --ALTERNATIVE-FONT: ${acuminProFont.style.fontFamily};
      }
    `}</style>
  );
};
