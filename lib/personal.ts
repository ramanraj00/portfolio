// The personal registry — the one file to edit when life moves on.
// Sources: legacy site resume data + posts; see docs/handoff.md.

export interface Experience {
  company: string
  companyEn: string
  role: string
  roleEn?: string
  from: number
  to?: number
  url?: string
}

export const experience: Experience[] = [
  { company: '佐玩 Zolplay', companyEn: 'Zolplay', role: '创始人 & 创意总监', roleEn: 'Founder & Creative Director', from: 2021, url: 'https://zolplay.com' },
  { company: 'very very spaceship', companyEn: 'very very spaceship', role: '软件工程师 II', roleEn: 'Software Engineer II', from: 2018, to: 2020 },
  { company: '8ninths', companyEn: '8ninths', role: '全栈与 AR 工程师', roleEn: 'Full-stack & AR Engineer', from: 2017, to: 2018 },
  { company: 'Abletive 电子音乐社区', companyEn: 'Abletive', role: '创始人 & 独立开发者', roleEn: 'Founder & indie dev', from: 2014, to: 2016 },
]

export interface Record_ {
  artist: string
  album: string
  year: number
  genre: string
  spineColor: string
  spineInk: string
  url?: string
  /** optional sleeve art dropped into public/images/records/ */
  art?: string
}

// 定番唱片 — spine colors are sampled once from the local cover art.
export const records: Record_[] = [
  { artist: '6ix9ine', album: 'P****I', year: 2018, genre: 'Hip-Hop/Rap', spineColor: '#a17265', spineInk: '#171717', art: '/images/records/6ix9ine-punani.jpg', url: 'https://music.apple.com/us/album/p-i/1711518965?i=1711518973&uo=4' },
  { artist: 'Remuta', album: 'Chercher L\'argent', year: 2021, genre: 'Afro-Beat', spineColor: '#5e5d57', spineInk: '#f7f4ed', art: '/images/records/remuta-chercher-largent.jpg', url: 'https://music.apple.com/us/album/chercher-largent/6787354270?i=6787354271&uo=4' },
  { artist: 'The Chainsmokers', album: 'Don\'t Let Me Down (feat. Daya)', year: 2016, genre: 'Dance', spineColor: '#bdb390', spineInk: '#171717', art: '/images/records/chainsmokers-dont-let-me-down.jpg', url: 'https://music.apple.com/us/album/dont-let-me-down-feat-daya/1170699510?i=1170699706&uo=4' },
  { artist: 'Shawn Mendes', album: 'There\'s Nothing Holdin\' Me Bac', year: 2016, genre: 'Pop', spineColor: '#546c62', spineInk: '#f7f4ed', art: '/images/records/shawn-mendes-there-is-nothing-holding-me-back.jpg', url: 'https://music.apple.com/us/album/theres-nothing-holdin-me-back/1440892227?i=1440892573&uo=4' },
  { artist: 'Arizona Zervas', album: 'ROXANNE', year: 2019, genre: 'Hip-Hop/Rap', spineColor: '#cfcfcf', spineInk: '#171717', art: '/images/records/arizona-zervas-roxanne.jpg', url: 'https://music.apple.com/us/album/roxanne/1496062760?i=1496062761&uo=4' },
  { artist: 'Kanye West, Big Sean, Pusha T ', album: 'Mercy', year: 2012, genre: 'Hip-Hop/Rap', spineColor: '#d8d8d8', spineInk: '#171717', art: '/images/records/kanye-west-mercy.jpg', url: 'https://music.apple.com/us/album/mercy/1443478391?i=1443478650&uo=4' },
  { artist: 'The Weeknd', album: 'After Hours', year: 2020, genre: 'R&B/Soul', spineColor: '#403729', spineInk: '#f7f4ed', art: '/images/records/the-weeknd-after-hours.jpg', url: 'https://music.apple.com/us/album/after-hours/1499378108?i=1499378615&uo=4' },
  { artist: 'The Weeknd', album: 'Starboy (feat. Daft Punk)', year: 2016, genre: 'R&B/Soul', spineColor: '#501a26', spineInk: '#f7f4ed', art: '/images/records/the-weeknd-starboy.jpg', url: 'https://music.apple.com/us/album/starboy-feat-daft-punk/1440870373?i=1440870375&uo=4' },
  { artist: 'JAWNY', album: 'Honeypie', year: 2019, genre: 'Alternative', spineColor: '#625246', spineInk: '#f7f4ed', art: '/images/records/jawny-honeypie.jpg', url: 'https://music.apple.com/us/album/honeypie/1536068346?i=1536068360&uo=4' },
  { artist: 'Hotel Ugly', album: 'Shut up My Moms Calling', year: 2020, genre: 'Neo-Soul', spineColor: '#5d473f', spineInk: '#f7f4ed', art: '/images/records/hotel-ugly-shut-up.jpg', url: 'https://music.apple.com/us/album/shut-up-my-moms-calling/1617969394?i=1617969731&uo=4' },
  { artist: 'Tame Impala', album: 'Dracula', year: 2025, genre: 'Alternative', spineColor: '#403d37', spineInk: '#f7f4ed', art: '/images/records/tame-impala-dracula.jpg', url: 'https://music.apple.com/us/album/dracula/1842444456?i=1842444457&uo=4' },
  { artist: 'WizTheMc & bees & honey', album: 'Show Me Love', year: 2025, genre: 'Pop', spineColor: '#6e7b53', spineInk: '#f7f4ed', art: '/images/records/wizthemc-show-me-love.jpg', url: 'https://music.apple.com/us/album/show-me-love/6766786709?i=6766786711&uo=4' },
  { artist: 'GauravV', album: '4 raws esdeekid', year: 2025, genre: 'Pop', spineColor: '#242525', spineInk: '#f7f4ed', art: '/images/records/esdeekid-4raws.jpg', url: 'https://music.apple.com/us/album/4-raws-esdeekid/1863820148?i=1863820149&uo=4' },
  { artist: 'Eminem', album: 'The Real Slim Shady (Live From', year: 2000, genre: 'Hip-Hop/Rap', spineColor: '#844841', spineInk: '#f7f4ed', art: '/images/records/eminem-the-real-slim-shady.jpg', url: 'https://music.apple.com/us/album/the-real-slim-shady-live-from-mtv-vmas-2000/1815859171?i=1815859197&uo=4' },
]

export interface Book {
  title: string
  author: string
  year: number
  category: string
  spineTitle?: string
  spineAuthor?: string
  spineColor: string
  spineInk: string
  /** cover image in public/images/books/ */
  art?: string
  /** intrinsic cover dimensions; the shelf derives its uncropped display width */
  coverWidth?: number
  coverHeight?: number
  /** spine width in px (18–38 looks right) */
  spine?: number
  url?: string
}

// 书架 — ordered by relevance to Cali's design, creative, and founder work.
export const books: Book[] = [
  { title: 'The Metamorphosis', spineTitle: 'The Metamorphos', spineAuthor: 'FK', author: 'Franz Kafka', year: 1924, category: 'Fiction', spineColor: '#bab768', spineInk: '#171717', art: '/images/books/franz-kafka-the-metamorphosis-v2.jpg', coverWidth: 600, coverHeight: 900, spine: 24, url: 'https://books.apple.com/us/book/metamorphosis/id395543620?uo=4' },
  { title: 'Can We be Strangers Again', spineTitle: 'Can We be Stran', spineAuthor: 'SS', author: 'Shrijeet Shandilya', year: 2025, category: 'Self-Improvement', spineColor: '#c0dddc', spineInk: '#171717', art: '/images/books/shrijeet-shandilya-can-we-be-strangers-again.jpg', coverWidth: 600, coverHeight: 900, spine: 24, url: 'https://books.apple.com/us/book/can-we-be-strangers-again/id6749946925?uo=4' },
  { title: 'The Trial', spineTitle: 'The Trial', spineAuthor: 'FK', author: 'Franz Kafka', year: 1925, category: 'Fiction', spineColor: '#555253', spineInk: '#f7f4ed', art: '/images/books/franz-kafka-the-trial-v2.jpg', coverWidth: 600, coverHeight: 900, spine: 24, url: 'https://books.apple.com/us/book/the-trial/id502255649?uo=4' },
  { title: 'Gunahon Ka Devta (गुनाहों का देवता)', spineTitle: 'Gunahon Ka Dev', spineAuthor: 'DB', author: 'Dharamvir Bharati', year: 1949, category: 'Fiction', spineColor: '#bda48c', spineInk: '#171717', art: '/images/books/dharamvir-bharati-gunahon-ka-devta-v2.jpg', coverWidth: 600, coverHeight: 900, spine: 24, url: 'https://en.wikipedia.org/wiki/Gunahon_Ka_Devta_(novel)' },
  { title: 'Musafir Cafe', spineTitle: 'Musafir Cafe', spineAuthor: 'DPD', author: 'Divya Prakash Dubey', year: 2016, category: 'Fiction', spineColor: '#99c4c9', spineInk: '#171717', art: '/images/books/divya-prakash-dubey-musafir-cafe-v2.jpg', coverWidth: 600, coverHeight: 900, spine: 24, url: 'https://www.goodreads.com/book/show/32014498-musafir-cafe' },
  { title: 'Kafka and the Doll', spineTitle: 'Kafka and the D', spineAuthor: 'LT', author: 'Larissa Theule', year: 2021, category: 'Fiction', spineColor: '#b1ad9c', spineInk: '#171717', art: '/images/books/larissa-theule-kafka-and-the-doll.jpg', coverWidth: 600, coverHeight: 900, spine: 24, url: 'https://books.apple.com/us/book/kafka-and-the-doll/id1519674902?uo=4' },
  { title: 'October Junction', spineTitle: 'October Junctio', spineAuthor: 'DPD', author: 'Divya Prakash Dubey', year: 2018, category: 'Fiction', spineColor: '#deb41d', spineInk: '#171717', art: '/images/books/divya-prakash-dubey-october-junction-v2.jpg', coverWidth: 600, coverHeight: 900, spine: 24, url: 'https://www.goodreads.com/en/book/show/42296767' },
  { title: 'Deewar Mein Ek Khirkee Rahati Thi', spineTitle: 'Deewar Mein', spineAuthor: 'VKS', author: 'Vinod Kumar Shukla', year: 1997, category: 'Fiction', spineColor: '#2c5863', spineInk: '#f7f4ed', art: '/images/books/vinod-kumar-shukla-deewar-mein-ek-khirkee-rahati-thi-v2.jpg', coverWidth: 600, coverHeight: 900, spine: 24, url: 'https://en.wikipedia.org/wiki/Deewar_Mein_Ek_Khirkee_Rahati_Thi' },
  { title: 'Sell Like Crazy', spineTitle: 'Sell Like Crazy', spineAuthor: 'SS', author: 'Sabri Suby', year: 2021, category: 'Business', spineColor: '#db6c63', spineInk: '#171717', art: '/images/books/sabri-suby-sell-like-crazy-v2.jpg', coverWidth: 600, coverHeight: 900, spine: 24, url: 'https://books.apple.com/us/book/summary-of-sabri-subys-sell-like-crazy/id1585489070?uo=4' },
  { title: 'Ret Ki Machhali', spineTitle: 'Ret Ki Machhali', spineAuthor: 'KB', author: 'Kanta Bharti', year: 1968, category: 'Fiction', spineColor: '#cab46b', spineInk: '#171717', art: '/images/books/kanta-bharti-ret-ki-machhali-v2.jpg', coverWidth: 600, coverHeight: 900, spine: 24, url: '#' },
  { title: 'Gaban', spineTitle: 'Gaban', spineAuthor: 'MP', author: 'Munshi Premchand', year: 1931, category: 'Fiction', spineColor: '#cdcdce', spineInk: '#171717', art: '/images/books/munshi-premchand-gaban.jpg', coverWidth: 600, coverHeight: 900, spine: 24, url: 'https://books.apple.com/us/book/gaban/id480610406?uo=4' },
  { title: 'Surviving Death', spineTitle: 'Surviving Death', spineAuthor: 'LK', author: 'Leslie Kean', year: 2017, category: 'Spirituality', spineColor: '#7a8897', spineInk: '#f7f4ed', art: '/images/books/leslie-kean-surviving-death.jpg', coverWidth: 600, coverHeight: 900, spine: 24, url: 'https://books.apple.com/us/book/surviving-death/id1132950735?uo=4' },
]
