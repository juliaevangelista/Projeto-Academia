export const SectionBeneficios = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-[#68686A] font-sans p-8 md:p-32">
      {/* DIV da imagem */}
      <div className="bg-[#68686A] w-full md:w-[530px] h-[320px] md:h-[640px] rounded-2xl flex items-center justify-center">
        aa
      </div>
      <div className="w-full md:w-[530px]">
        <h1 className="text-3xl md:text-5xl mb-6 font-bold text-center md:text-left">
          Por que escolher o Leo & Cia Fitness?
        </h1>
        <h3 className="text-base md:text-xl mb-8 font-medium text-center md:text-left">
          Descubra os benefícios que nos diferenciam e impulsionam sua jornada
          fitness.
        </h3>
        <div>
          <h5 className="text-lg md:text-xl mb-2 font-medium">Treinamento Personalizado</h5>
          <p className="text-sm md:text-base mb-6">
            Nossos professores fornecem orientação personalizada e conselhos
            especializados para ajudar você a atingir seus objetivos de
            condicionamento físico.
          </p>
        </div>
        <div>
          <h5 className="text-lg md:text-xl mb-2 font-medium">Equipamentos Ideais para o Seu Treino</h5>
          <p className="text-sm md:text-base mb-6">
            Work out with the latest and most advanced fitness equipment to
            maximize your results and enhance your experience.
          </p>
        </div>
        <div>
          <h5 className="text-lg md:text-xl mb-2 font-medium">Programas Abrangentes</h5>
          <p className="text-sm md:text-base mb-6">
            Aproveite uma variedade de aulas e programas adaptados a todos os
            níveis de condicionamento físico, do iniciante ao avançado.
          </p>
        </div>
      </div>
    </div>
  );
};
