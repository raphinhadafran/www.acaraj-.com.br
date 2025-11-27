// script.js
const filmes = {
  genero1: [
    { nome: 'Filme 1', imagem: 'imagem1.jpg', classificacao: '10', ano: 0, duracao: '0', sinopse: 'Sinopse do Filme 1', trailer: 'linkfilme1' },
    { nome: 'Filme 2', imagem: 'imagem2.jpg', classificacao: '10', ano: 0, duracao: '0', sinopse: 'Sinopse do Filme 2', trailer: 'linkfilme2' },
    { nome: 'Filme 3', imagem: 'imagem3.jpg', classificacao: '12', ano: 0, duracao: '0', sinopse: 'Sinopse do Filme 3', trailer: 'linkfilme3' },
    { nome: 'Filme 4', imagem: 'imagem4.jpg', classificacao: '14', ano: 0, duracao: '0', sinopse: 'Sinopse do Filme 4', trailer: 'linkfilme4' },
    { nome: 'Filme 5', imagem: 'imagem5.jpg', classificacao: '16', ano: 0, duracao: '0', sinopse: 'Sinopse do Filme 5', trailer: 'linkfilme5' }
  ],

  genero2: [
    { nome: 'Filme 6', imagem: 'imagem6.jpg', classificacao: 'Livre', ano: 0, duracao: '0', sinopse: 'Sinopse do Filme 6', trailer: 'linkfilme6' },
    { nome: 'Filme 7', imagem: 'imagem7.jpg', classificacao: '10', ano: 0, duracao: '0', sinopse: 'Sinopse do Filme 7', trailer: 'linkfilme7' },
    { nome: 'Filme 8', imagem: 'imagem8.jpg', classificacao: '12', ano: 0, duracao: '0', sinopse: 'Sinopse do Filme 8', trailer: 'linkfilme8' },
    { nome: 'Filme 9', imagem: 'imagem9.jpg', classificacao: '14', ano: 0, duracao: '0', sinopse: 'Sinopse do Filme 9', trailer: 'linkfilme9' },
    { nome: 'Filme 10', imagem: 'imagem10.jpg', classificacao: '16', ano: 0, duracao: '0', sinopse: 'Sinopse do Filme 10', trailer: 'linkfilme10' }
  ],

  genero3: [
    { nome: 'Filme 11', imagem: 'imagem11.jpg', classificacao: 'Livre', ano: 0, duracao: '0', sinopse: 'Sinopse do Filme 11', trailer: 'linkfilme11' },
    { nome: 'Filme 12', imagem: 'imagem12.jpg', classificacao: '10', ano: 0, duracao: '0', sinopse: 'Sinopse do Filme 12', trailer: 'linkfilme12' },
    { nome: 'Filme 13', imagem: 'imagem13.jpg', classificacao: '12', ano: 0, duracao: '0', sinopse: 'Sinopse do Filme 13', trailer: 'linkfilme13' },
    { nome: 'Filme 14', imagem: 'imagem14.jpg', classificacao: '14', ano: 0, duracao: '0', sinopse: 'Sinopse do Filme 14', trailer: 'linkfilme14' },
    { nome: 'Filme 15', imagem: 'imagem15.jpg', classificacao: '16', ano: 0, duracao: '0', sinopse: 'Sinopse do Filme 15', trailer: 'linkfilme15' }
  ],

  // -------------------------
  // LUIZ HENRIQUE GONÇALVES
  // ANIMAÇÃO
  // -------------------------
  animacao: [
    {
      nome: 'Bob Esponja: O Filme',
      imagem: 'imagem_bobesponja.jpg',
      classificacao: 'Livre',
      ano: 0,
      duracao: '0',
      sinopse: 'Após a coroa do Rei Netuno ser roubada, Bob Esponja e Patrick partem em uma viagem pela Fenda do Bikini para reencontrá-la, enfrentando monstros marinhos e vilões perigosos.',
      trailer: 'link_bobesponja'
    },
    {
      nome: 'Homem-Aranha (Animação)',
      imagem: 'imagem_homemaranha.jpg',
      classificacao: '10',
      ano: 0,
      duracao: '0',
      sinopse: 'Miles Morales recebe a visita de Gwen Stacy e viaja pelo Aranhaverso, descobrindo heróis de outras dimensões e enfrentando uma ameaça que pode destruir tudo.',
      trailer: 'link_homemaranha'
    },
    {
      nome: 'Rei Leão',
      imagem: 'imagem_reileao.jpg',
      classificacao: '12',
      ano: 0,
      duracao: '0',
      sinopse: 'Alex, Marty, Melman e Gloria deixam o zoológico de Nova York e acabam em Madagascar, onde precisam aprender a sobreviver em uma verdadeira selva.',
      trailer: 'link_reileao'
    },
    {
      nome: 'Batman: O Longo Dia das Bruxas',
      imagem: 'imagem_batman.jpg',
      classificacao: '14',
      ano: 0,
      duracao: '0',
      sinopse: 'Batman se une a Gordon e Harvey Dent para deter a Família Falcone enquanto um assassino misterioso age em feriados, desafiando o maior detetive do mundo.',
      trailer: 'link_batman'
    },
    {
      nome: 'Rick e Morty',
      imagem: 'imagem_rickmorty.jpg',
      classificacao: '16',
      ano: 0,
      duracao: '0',
      sinopse: 'Rick retorna após 20 anos e envolve seus netos em aventuras perigosas enquanto cria máquinas e experimentos malucos em sua garagem.',
      trailer: 'link_rickmorty'
    }
  ],

  // ---------------------
  // WILLIAN ALVES ZIEMBA
  // TERROR
  // ---------------------
  terror: [
    {
      nome: 'A Casa Monstro',
      imagem: 'imagem_casamonstro.jpg',
      classificacao: '10',
      ano: 0,
      duracao: '0',
      sinopse: 'DJ Walters descobre que a casa do velho Nebbercracker é viva e devora tudo que chega perto. Ele e seus amigos tentam descobrir o mistério.',
      trailer: 'link_casamonstro'
    },
    {
      nome: 'Todo Mundo em Pânico',
      imagem: 'imagem_todomundo.jpg',
      classificacao: '16',
      ano: 0,
      duracao: '0',
      sinopse: 'Um grupo de adolescentes é perseguido por um assassino um ano após acidentalmente matarem um homem.',
      trailer: 'link_todomundo'
    },
    {
      nome: 'Scooby-Doo 2: Monstros à Solta',
      imagem: 'imagem_scooby.jpg',
      classificacao: 'Livre',
      ano: 0,
      duracao: '0',
      sinopse: 'Um vilão usa uma máquina de monstros para trazer criaturas à vida e aterrorizar Vila Legal. A Mistério S/A precisa resolver o caso.',
      trailer: 'link_scooby'
    },
    {
      nome: 'O Grito',
      imagem: 'imagem_ogrito.jpg',
      classificacao: '14',
      ano: 0,
      duracao: '0',
      sinopse: 'Uma maldição mortal nasce em uma casa japonesa e envolve uma estudante americana em um ciclo de terror.',
      trailer: 'link_ogrito'
    },
    {
      nome: 'Os Outros',
      imagem: 'imagem_osoutros.jpg',
      classificacao: '12',
      ano: 0,
      duracao: '0',
      sinopse: 'Grace vive isolada com seus filhos sensíveis à luz, mas eventos estranhos começam quando novos empregados quebram regras da casa.',
      trailer: 'link_osoutros'
    }
  ],

  // -----------------------------
  // RAPHAEL DOS SANTOS CLEMENTE
  // AÇÃO
  // -----------------------------
  acao: [
    {
      nome: 'Detona Ralph',
      imagem: 'imagem_ralph.jpg',
      classificacao: 'Livre',
      ano: 0,
      duracao: '0',
      sinopse: 'Ralph invade um jogo para ganhar uma medalha e acaba liberando um inimigo mortal que ameaça todo o fliperama.',
      trailer: 'link_ralph'
    },
    {
      nome: 'Os Incríveis',
      imagem: 'imagem_incriveis.jpg',
      classificacao: '10',
      ano: 0,
      duracao: '0',
      sinopse: 'Beto Pêra volta à ação em uma missão secreta que envolve toda a sua família de super-heróis.',
      trailer: 'link_incriveis'
    },
    {
      nome: 'Jumanji: Bem-vindo à Selva',
      imagem: 'imagem_jumanji.jpg',
      classificacao: '12',
      ano: 0,
      duracao: '0',
      sinopse: 'Quatro jovens são transportados para dentro de um videogame e precisam terminar o jogo para voltar ao mundo real.',
      trailer: 'link_jumanji'
    },
    {
      nome: 'Velozes e Furiosos 7',
      imagem: 'imagem_velozes7.jpg',
      classificacao: '14',
      ano: 0,
      duracao: '0',
      sinopse: 'Deckard Shaw busca vingança e força a equipe de Dom a se unir mais uma vez em uma batalha pela sobrevivência.',
      trailer: 'link_velozes'
    },
    {
      nome: 'Tropa de Elite',
      imagem: 'imagem_tropaelite.jpg',
      classificacao: '16',
      ano: 0,
      duracao: '0',
      sinopse: 'O cotidiano de policiais do BOPE em meio à corrupção e violência no Rio de Janeiro.',
      trailer: 'link_tropa'
    }
  ]
};
};


let idadeUsuario = 0;


function inserirNome() {
  let nomeUsuario = prompt("Qual o seu nome?");
  let elemento = document.querySelector("#nome-usuario");
  elemento.textContent = `Olá, ${nomeUsuario}! Espero te ajudar a escolher um filme!`;
}


function validarIdade() {
  const input = document.getElementById('idade');
  idadeUsuario = parseInt(input.value);
  if (!isNaN(idadeUsuario) && idadeUsuario >= 0) {
    document.getElementById('menu-generos').classList.remove('oculto');
  } else {
    alert('Por favor, digite uma idade válida.');
  }
}


function mostrarFilmes(genero) {
  const container = document.getElementById('conteudo-filmes');
  container.innerHTML = '';


  filmes[genero].forEach(filme => {
    if (verificarClassificacao(filme.classificacao)) {
      const div = document.createElement('div');
      div.classList.add('filme');


      div.innerHTML = `
  	<h2>${filme.nome}</h2>
 	 <img src="${filme.imagem}" alt="${filme.nome}" />
  	<p><strong>Classificação:</strong> ${filme.classificacao} anos</p>
  	<p><strong>Ano:</strong> ${filme.ano}</p>
  	<p><strong>Duração:</strong> ${filme.duracao}</p>
  	<p><strong>Sinopse:</strong> ${filme.sinopse}</p>


  	<iframe 
    		src="https://www.youtube.com/embed/${filme.trailer}"
   		 allowfullscreen>
  	</iframe>
`;


      container.appendChild(div);
    }
  });
}


function verificarClassificacao(classificacao) {
  if (classificacao === 'Livre') return true;
  return idadeUsuario >= parseInt(classificacao);
}


inserirNome();

