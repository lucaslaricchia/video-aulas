import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";

export function Subscribe() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();
    await createSubscriber({
      variables: {
        name,
        email,
      },
    });

    navigate("/event");
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-between flex-col">
        <div className="w-full flex items-center justify-between mt-20 mx-auto">
          <div className="max-w-[640px]">
            <Logo />
            <h1 className="mt-8 text-[2.5rem] leading-tight">
              Quer subir o seu <strong className="text-blue-500">MMR</strong>?
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              Aprenda gratuitamente com os instrutores da{" "}
              <strong className="text-blue-500">Toalha's Academy</strong>
            </p>
          </div>
          <iframe
            className="max-h-[350px]"
            src="https://discord.com/widget?id=995422411111551076&theme=dark"
            width="350"
            height="500"
            allowTransparency={true}
            frameBorder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          ></iframe>
        </div>
        <div className="max-w-[390px] p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">
            Inscreva-se gratuitamente
          </strong>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col gap-2 w-full"
          >
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Seu nome completo"
              onChange={(event) => setName(event.target.value)}
            />
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              placeholder="Digite seu e-mail"
              onChange={(event) => setEmail(event.target.value)}
            />
            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              Acessar o conteúdo!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
