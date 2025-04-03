import { PulseBeamsSecond } from "@/components/ui/pulse-beams";
import { SectionHeader } from "@/components/ui/section-header";

import { Spotlight } from "@/components/ui/spotlight";

export function Contact() {
  return (
    <div className="text-center  w-3/4 md:w-1/2 mx-auto" id="contact">
      <Spotlight fill="#22D3EE" />

      <SectionHeader>Entre em contato</SectionHeader>

      <p className="text-xl leading-8 w-full mx-auto">
        Seja para uma ideia inovadora ou para encontrar um parceiro para seu
        próximo projeto, estou aqui para ajudar a tornar sua visão realidade.{" "}
        <br />
        Entre em contato para discutirmos como podemos colaborar e criar algo
        incrível juntos.
      </p>

      <PulseBeamsSecond />
    </div>
  );
}
