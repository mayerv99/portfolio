import { SectionHeader } from "@/components/ui/section-header";
import { Skills } from "./skills";

export function AboutMe() {
  return (
    <div className="text-center" id="about-me">
      <SectionHeader>Olá, eu sou Victor Aragão</SectionHeader>

      <p className="text-xl leading-8 w-3/4 md:w-1/2 mx-auto">
        Como <strong>desenvolvedor de software</strong> especializado em{" "}
        <strong>React.js e Node.js</strong>, passei os últimos seis anos como
        desenvolvedor freelancer, colaborando com diversos clientes e empresas.
        Movido pela minha paixão por tecnologia, enfrento desafios de frente,
        entregando consistentemente soluções de alto nível. Minha dedicação em
        me manter atualizado com as tendências do setor garante que trago
        inovação e qualidade para cada projeto. Posso oferecer uma combinação de{" "}
        <strong>
          expertise técnica, criatividade e compromisso com a excelência
        </strong>{" "}
        em cada empreendimento.
      </p>
      <Skills />
    </div>
  );
}
