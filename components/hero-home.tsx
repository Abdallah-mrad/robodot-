import VideoThumb from "@/public/images/Thumb.png";
import ModalVideo from "@/components/modal-video";

export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1104}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="/images/DUT Handler.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </div>
    </section>
  );
}
