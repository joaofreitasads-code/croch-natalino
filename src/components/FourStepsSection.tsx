import React from 'react';

export const FourStepsSection: React.FC = () => {
  const steps = [
    { number: '1', title: 'Escolha seu Pacote', desc: 'Selecione o pacote básico ou completo com todos os bônus.' },
    { number: '2', title: 'Pagamento Seguro', desc: 'Pague via Pix (aprovação imediata) ou cartão de crédito.' },
    { number: '3', title: 'Acesso Instantâneo', desc: 'Receba seus dados de acesso diretamente no seu e-mail cadastrado.' },
    { number: '4', title: 'Comece a Criar', desc: 'Baixe os moldes em PDF, imprima se quiser e faça peças lindas!' }
  ];

  return (
    <section className="py-14 px-4 bg-[#f5f1e8] border-b border-amber-900/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-georgia text-2xl sm:text-3xl md:text-4xl font-bold text-[#99583b] mb-8">
          Acesso em 4 passos simples:
        </h2>

        {/* 4 Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-left">
          {steps.map(step => (
            <div
              key={step.number}
              className="bg-white rounded-2xl p-5 shadow-sm border border-amber-200 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="w-10 h-10 rounded-full bg-[#008735] text-white flex items-center justify-center font-bold text-lg mb-3 shadow-md">
                {step.number}
              </div>
              <h3 className="font-georgia font-bold text-base text-neutral-900 mb-1.5">
                {step.title}
              </h3>
              <p className="font-assistant text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Illustrated image from page */}
        <div className="max-w-md mx-auto rounded-2xl overflow-hidden shadow-md">
          <img
            src="https://media.atomicatmedia.net/u/K0g3hTUvVFQ3mhBFVs2JSfKk5WQ2/Pictures/mRHzjS9524375.png"
            alt="Acesso em 4 passos simples"
            className="w-full h-auto object-contain"
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
};
