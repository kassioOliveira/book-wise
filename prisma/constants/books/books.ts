import ARevolucaoDosBichos from './assets/Book.png'
import ArquiteturaLimpa from './assets/arquitetura-limpa.png'
import CodigoLimpo from './assets/codigo-limpo.png'
import EntendendoAlgoritmos from './assets/entendendo-algoritmos.png'
import FragmentosDoHorror from './assets/fragmentos-do-horror.png'
import OfimDaEternidade from './assets/o-fim-da-eternidade.png'
import OHobbit from './assets/o-hobbit.png'
import ViagemAoCentroDaTerra from './assets/viagem-ao-centro-da-terra.png'
import OGuiaDoMochileiroDaGalaxia from './assets/o-guia-do-mochileiro-das-galaxias.png'
import DomainDrivenDesign from './assets/domain-driven-design.png'
import OProgramadorPragmatico from './assets/o-programador-pragmatico.png'
import OPoderDoHabito from './assets/o-poder-do-habito.png'
import HabitosDeDesenvolvedoresAltamenteProdutivos from './assets/14-habitos-de-desenvolvedores-altamente-produtivos.png'
import Refatoracao from './assets/refatoracao.png'
import HistoriasExtraordinarias from './assets/historias-extraordinarias.png'

export const books = [
  {
    id: '1',
    author: 'George Orwell',
    name: 'A Revolução Dos Bichos',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    cover_url: String(ARevolucaoDosBichos),
    total_pages: 200,
    categories: [
      {
        id: 3,
        name: 'Fantasia',
      },
      {
        id: 7,
        name: 'Suspense',
      },
    ],
  },
  {
    id: '2',
    author: 'Robert C.Martin',
    name: 'Arquitetura Limpa',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    cover_url: String(ArquiteturaLimpa),
    total_pages: 200,
    categories: [
      {
        id: 1,
        name: 'Computação',
      },
      {
        id: 2,
        name: 'Educação',
      },
    ],
  },
  {
    id: '3',
    author: 'Robert C.Martin',
    name: 'Código Limpo',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    cover_url: String(CodigoLimpo),
    total_pages: 230,
    categories: [
      {
        id: 1,
        name: 'Computação',
      },
      {
        id: 2,
        name: 'Educação',
      },
    ],
  },
  {
    id: '4',
    author: 'Aditya Y.Bhargava',
    name: 'Entendendo Algoritmos',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    cover_url: String(EntendendoAlgoritmos),
    total_pages: 375,
    categories: [
      {
        id: 1,
        name: 'Computação',
      },
      {
        id: 2,
        name: 'Educação',
      },
    ],
  },
  {
    id: '5',
    author: 'Junji Ito',
    name: 'Fragmentos Do Horror',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    cover_url: String(FragmentosDoHorror),
    total_pages: 248,
    categories: [
      {
        id: 5,
        name: 'Horror',
      },
    ],
  },
  {
    id: '6',
    author: 'Isacc Asimov',
    name: 'O Fim Da Eternidade',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    cover_url: String(OfimDaEternidade),
    total_pages: 340,
    categories: [
      {
        id: 6,
        name: 'HQs',
      },
      {
        id: 7,
        name: 'Suspense',
      },
    ],
  },
  {
    id: '7',
    author: 'J.R.R Tolkien',
    name: 'O Hobbit',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    cover_url: String(OHobbit),
    total_pages: 340,
    categories: [
      {
        id: 3,
        name: 'Fantasia',
      },
      {
        id: 7,
        name: 'Suspense',
      },
    ],
  },
  {
    id: '8',
    author: 'Júlio Verne',
    name: 'Viagem ao Centro da Terra',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    cover_url: String(ViagemAoCentroDaTerra),
    total_pages: 340,
    categories: [
      {
        id: 3,
        name: 'Fantasia',
      },
      {
        id: 7,
        name: 'Suspense',
      },
      {
        id: 4,
        name: 'Ficção científica',
      },
    ],
  },
  {
    id: '9',
    author: 'Douglas Adams',
    name: 'O Guia Do Mochileiro Da Galaxia',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    cover_url: String(OGuiaDoMochileiroDaGalaxia),
    total_pages: 372,
    categories: [
      {
        id: 3,
        name: 'Fantasia',
      },
      {
        id: 7,
        name: 'Suspense',
      },
      {
        id: 4,
        name: 'Ficção científica',
      },
    ],
  },
  {
    id: '10',
    author: 'Eric Evans',
    name: 'Domain-Driven Design',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    cover_url: String(DomainDrivenDesign),
    total_pages: 340,
    categories: [
      {
        id: 1,
        name: 'Computação',
      },
      {
        id: 2,
        name: 'Educação',
      },
    ],
  },
  {
    id: '11',
    author: 'Andrew Hunt, David Thomas',
    name: 'O Programador Pragmático',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    cover_url: String(OProgramadorPragmatico),
    total_pages: 357,
    categories: [
      {
        id: 1,
        name: 'Computação',
      },
      {
        id: 2,
        name: 'Educação',
      },
    ],
  },

  {
    id: ' 12',
    author: 'Charles Duhigg',
    name: 'O Poder do Hábito',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    cover_url: String(OPoderDoHabito),
    total_pages: 357,
    categories: [
      {
        id: 2,
        name: 'Educação',
      },
    ],
  },
  {
    id: '13',
    author: 'Zeno Rocha',
    name: '14 Hábitos de Desenvolvedores Altamente Produtivos',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    cover_url: String(HabitosDeDesenvolvedoresAltamenteProdutivos),
    total_pages: 334,
    categories: [
      {
        id: 1,
        name: 'Computação',
      },
      {
        id: 2,
        name: 'Educação',
      },
    ],
  },
  {
    id: '14',
    author: 'Martin Fowler',
    name: 'Refatoração',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    cover_url: String(Refatoracao),
    total_pages: 374,
    categories: [
      {
        id: 1,
        name: 'Computação',
      },
      {
        id: 2,
        name: 'Educação',
      },
    ],
  },
  {
    id: '15',
    author: 'Edgar Allan Poe',
    name: 'Histórias Extraordinárias',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    cover_url: String(HistoriasExtraordinarias),
    total_pages: 374,
    categories: [
      {
        id: 3,
        name: 'Fantasia',
      },
      {
        id: 7,
        name: 'Suspense',
      },
    ],
  },
]
