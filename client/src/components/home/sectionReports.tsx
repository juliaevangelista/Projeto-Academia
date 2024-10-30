import React from "react";

export const SectionReports = () => {
  return (
    <div className="w-full h-full text-[#68686A] p-5">
      <div className="text-center max-w-[790px] mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold">
          Vozes Reais, Transformações Reais
        </h1>
        <p className="mt-6 text-base md:text-lg">
          Veja como o Leo & Cia Academia ajudou nossos membros a atingir suas
          metas de condicionamento físico e transformar suas vidas por meio de
          treinamento especializado e comunidade de apoio.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center p-4 md:p-8">
        <div className="flex flex-col border-2 border-[#68686A] p-4 rounded-lg">
          <p>
            Entrar para a Leo & Cia Academia foi a melhor decisão que já tomei
            para minha saúde. Os treinadores são incrivelmente solidários, e os
            programas personalizados me ajudaram a alcançar os resultados que
            queria.
          </p>
          <div className="flex flex-row mt-6 items-center">
            <div className="rounded-full bg-[#68686A] w-[56px] h-[56px] mr-5"></div>
            <div>
              <p className="">John Doe</p>
              <p className="">Marketing Executive</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-2 border-[#68686A] p-4 rounded-lg">
          <p>
            As aulas em grupo da FitLife Studios são muito divertidas e
            motivadoras. Eu perdi 20 quilos e ganhei muita confiança. A
            comunidade aqui é incrível!
          </p>
          <div className="flex flex-row mt-6 items-center">
            <div className="rounded-full bg-[#68686A] w-[56px] h-[56px] mr-5"></div>
            <div>
              <p className="">Sarah Smith</p>
              <p className="">Marketing Executive</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-2 border-[#68686A] p-4 rounded-lg">
          <p>
            A abordagem holística no FitLife Studio melhorou meu bem-estar
            geral. A combinação de treinamento de força, cardio e programas de
            bem-estar foi transformadora.
          </p>
          <div className="flex flex-row mt-6 items-center">
            <div className="rounded-full bg-[#68686A] w-[56px] h-[56px] mr-5"></div>
            <div>
              <p className="">Mike Johnson</p>
              <p className="">Marketing Executive</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
