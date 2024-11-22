import {Avatar, cn, Image, Select, SelectItem} from "@nextui-org/react";
import LogoWhatsapp from "./assets/whatsapp.svg";
import {Key, useState} from "react";

type listaSetoresType = {
    [key: string]: string;
}
export default function App() {
  const [value, setValue] = useState<Set<Key>>(new Set([]));

  const listaSetores:listaSetoresType = {
    "cat": "Cat",
    "dog": "Dog",
    "elephant": "Elephant",
    "giraffe": "Giraffe",
    "lion": "Lion",
    "tiger": "Tiger",
  };

  return (
    <>
      <div className={cn(
        "w-full max-w-[380px] min-h-[500px] fixed right-[10px] bottom-[80px] rounded-xl",
        "overflow-auto border-white border-1 shadow-large drop-shadow-md",
      )}>
        <div className="flex flex-col w-full h-[500px] relative bg-gray-200">
          <div className={cn("bg-gray-50 w-full h-auto flex flex-row text-gray-800 p-2 gap-2 items-center")}>
            <div>
              <Image
                isBlurred
                width={40}
                src={LogoWhatsapp}
              />
            </div>
            <div className="flex flex-col gap-[1px] leading-4">
              <div className="text-[14px] font-bold">Atendimento via Whatsapp</div>
              <div className="font-light text-[12px]">Selecione um dos nossos contatos pra iniciar a conversa.</div>
            </div>
          </div>
          <div className="w-full h-[60px] pt-2 p-2 flex flex-col">
            <Select
                label="Filtre por setor"
                placeholder="Selecione um setor"
                selectedKeys={value}
                size={"sm"}
                fullWidth
                onChange={(e)=>setValue(new Set([e.target.value]))}
            >
              {Object.keys(listaSetores).map((key) => (
                  <SelectItem key={key}>
                    {listaSetores[key]}
                  </SelectItem>
              ))}
            </Select>
          </div>
          <div className="w-full h-full p-3 flex flex-col">
            <ul className="overflow-hidden">
              <li>
                <div className="flex bg-white rounded-lg p-2 items-center gap-2">
                  <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" size="md" isBordered />
                  <div>
                    <div className="font-bold text-[14px]">Nome do Contato</div>
                    <div className="text-gray-500 text-[11px]">Última mensagem</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-full h-[50px] grid absolute bottom-0 bg-gray-500">
            <div>Horário de </div>
          </div>
        </div>
      </div>
    </>
  )
}
