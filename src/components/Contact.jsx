import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} alt="Vyron cinematic world artwork" />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen  px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/worlds/eclipse.png"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="/worlds/eden.png"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/worlds/neon.png"
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="/worlds/ashen.png"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            The Vyron Universe
          </p>

          <AnimatedTitle
            title="f<b>o</b>ur w<b>o</b>rlds.<br /> infinite st<b>o</b>ries."
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          <Button title="contact us" onClick={() => { window.location.href = "mailto:sierra@recoverrevenue.company?subject=Vyron%20Gaming%20Concept%20Enquiry"; }} containerClass="mt-10 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
