import { IoMdPlay } from "react-icons/io";
import { SlArrowRight } from "react-icons/sl";
export const SectionVideo = () => {
  return (
    <div className="bg-neutral-300 text-white w-full flex flex-row gap-3 items-center justify-center font-roboto h-[790px]">
      <div className="items-center justify-center w-[558px]">
        <h1 className="text-6xl tracking-[0.04em] font-normal mb-6">
          Transforme seu corpo e alcance seus objetivos. Sua jornada fitness
          começa agora!
        </h1>
        <p className="text-xl font-medium">
          Na Academia, somos mais que uma academia – somos seu caminho
          para resultados reais. Junte-se a nós e transforme-se!
        </p>
        <div className="flex flex-row gap-3 mt-[48px]">
          <div className="flex flex-row gap-3 items-center mr-7 ml-6">
            <p className="font-semibold">Agende uma Aula Grátis</p>
            <SlArrowRight size={15} color="#68686A" />
          </div>
          <div className="flex flex-row gap-4 items-center">
            <div className="bg-white rounded-full items-center justify-center p-2">
              <IoMdPlay size={15} color="#D9D9D9" />
            </div>
            <p className="font-semibold">Assistir demonstração</p>
          </div>
        </div>
      </div>
      <div className="w-[634px] h-[730px] bg-neutral-500 mt-auto"></div>
    </div>
  );
};
