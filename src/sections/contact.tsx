import { PulseBeamsSecond } from "@/components/ui/pulse-beams";
import { SectionHeader } from "@/components/ui/section-header";

import { Spotlight } from "@/components/ui/spotlight";

export function Contact() {
  return (
    <div className="text-center w-1/2 mx-auto">
      <Spotlight fill="#22D3EE" />

      <SectionHeader>Let's Connect</SectionHeader>

      <p className="text-xl leading-8 w-full mx-auto">
        Whether you have a groundbreaking idea or need a partner for your next
        project, I'm here to help bring your vision to life. <br />
        Reach out to discuss how we can collaborate and create something amazing
        together.
      </p>

      <PulseBeamsSecond />
    </div>
  );
}
