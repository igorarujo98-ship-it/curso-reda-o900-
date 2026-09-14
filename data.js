/* ====================================================================
   CURSO NOTA MÁXIMA — ARQUIVO DE DADOS (PAINEL DO ADMIN)
   --------------------------------------------------------------------
   COMO EDITAR (sem programação):

   1. PLANOS ................. seção "planos"
      - "linkParcelado": link do Mercado Pago para parcelamento
      - "pixCopiaECola": código Pix copia e cola
      - "pixQr": caminho da imagem do QR code (coloque na pasta arquivos/)

   2. CPFs DOS ALUNOS ........ seção "cpfs"
      Após cada pagamento confirmado, adicione o CPF do aluno aqui.
      Exemplo:  cpfs: [ "12345678900", "98765432100" ]

   3. AULAS .................. seção "aulas"
      - "youtube": link do vídeo (reproduzido DENTRO da plataforma)
      - "pdf": caminho do PDF (coloque na pasta arquivos/)
      - Para adicionar a Aula 6, edite os dados abaixo.

   4. TEMAS .................. seção "temas"
      - "titulo": nome do tema (renomeie aqui)
      - "modelo": cole a redação nota máxima pronta
      - "pdf": ou coloque  arquivos/temaN.pdf

   5. WHATSAPP ............... número para envio de comprovante

   6. SALVE e publique de novo no Vercel.
   ==================================================================== */

window.CURSO = {
  whatsapp: "(99)98266-1111",

  planos: [
    {
      id: "basico",
      nome: "Plano Básico",
      tag: " popular",
      features: [
        "Acesso à plataforma",
        "6 aulas completas em vídeo",
        "Slides das aulas em PDF"
      ],
      parcelas: "6x de R$ 24,99",
      parcelasTotal: "R$ 149,94",
      avista: "124,99",
      linkParcelado: "https://mpago.li/2svJUT5",
      pixCopiaECola: "00020126580014BR.GOV.BCB.PIX013600004ae1-320e-4fa8-9464-a7954639f3a15204000053039865406124.995802BR5920Igor Araujo da Rocha6009SAO PAULO62140510ciG3SVCMNi6304A0DA",
      pixQr: "arquivos/pix-12499.jpg"
    },
    {
      id: "super",
      nome: "Plano Super",
      tag: " mais completo",
      features: [
        "Tudo do Plano Básico",
        "+ 10 temas com modelos prontos",
        "Modelos nota máxima escritos pelo professor"
      ],
      destaque: true,
      parcelas: "6x de R$ 33,99",
      parcelasTotal: "R$ 203,94",
      avista: "180,00",
      linkParcelado: "https://mpago.li/1bTigpL",
      pixCopiaECola: "00020126580014BR.GOV.BCB.PIX013600004ae1-320e-4fa8-9464-a7954639f3a15204000053039865406180.005802BR5920Igor Araujo da Rocha6009SAO PAULO62140510OksbsWmPUB6304A1A4",
      pixQr: "arquivos/pix-180.jpeg"
    }
  ],

  cpfs: [],

  aulas: [
    {
      id: "aula1",
      titulo: "Conceitos Básicos",
      descricao: "O que é a redação dissertativo-argumentativa, como funciona a prova e por que a redação é a chave.",
      youtube: null,
      pdf: null
    },
    {
      id: "aula2",
      titulo: "Estrutura Básica",
      descricao: "Os 4 parágrafos essenciais: introdução, desenvolvimento 1, desenvolvimento 2 e conclusão.",
      youtube: null,
      pdf: null
    },
    {
      id: "aula3",
      titulo: "A Introdução",
      descricao: "Frase introdutória, relação com o tema, causadores e finalização — a porta de entrada do texto.",
      youtube: null,
      pdf: null
    },
    {
      id: "aula4",
      titulo: "O Desenvolvimento",
      descricao: "Tópico frasal, citação, causa e consequência, evidência e opinião cidadã.",
      youtube: null,
      pdf: null
    },
    {
      id: "aula5",
      titulo: "A Conclusão",
      descricao: "Reforçar medidas, explicar aplicação e fechar com elegância — o coroa do texto.",
      youtube: null,
      pdf: null
    },
    {
      id: "aula6",
      titulo: "Fazendo Redação Junto Com Você",
      descricao: "Momento prático: o professor escreve uma redação ao vivo aplicando todo o método ensinado nas aulas anteriores.",
      youtube: null,
      pdf: null
    }
  ],

  temas: [
    { id: "tema1",  titulo: "Tema 1",  resumo: "Modelo de redação nota máxima para este tema.",  modelo: null,  pdf: null },
    { id: "tema2",  titulo: "Tema 2",  resumo: "Modelo de redação nota máxima para este tema.",  modelo: null,  pdf: null },
    { id: "tema3",  titulo: "Tema 3",  resumo: "Modelo de redação nota máxima para este tema.",  modelo: null,  pdf: null },
    { id: "tema4",  titulo: "Tema 4",  resumo: "Modelo de redação nota máxima para este tema.",  modelo: null,  pdf: null },
    { id: "tema5",  titulo: "Tema 5",  resumo: "Modelo de redação nota máxima para este tema.",  modelo: null,  pdf: null },
    { id: "tema6",  titulo: "Tema 6",  resumo: "Modelo de redação nota máxima para este tema.",  modelo: null,  pdf: null },
    { id: "tema7",  titulo: "Tema 7",  resumo: "Modelo de redação nota máxima para este tema.",  modelo: null,  pdf: null },
    { id: "tema8",  titulo: "Tema 8",  resumo: "Modelo de redação nota máxima para este tema.",  modelo: null,  pdf: null },
    { id: "tema9",  titulo: "Tema 9",  resumo: "Modelo de redação nota máxima para este tema.",  modelo: null,  pdf: null },
    { id: "tema10", titulo: "Tema 10", resumo: "Modelo de redação nota máxima para este tema.",  modelo: null,  pdf: null }
  ]
};