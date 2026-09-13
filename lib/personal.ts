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
  { artist: 'Rihanna', album: 'Russian Roulette', year: 2009, genre: 'Pop', spineColor: '#464645', spineInk: '#f7f4ed', art: '/images/records/ronis-russian-roulette.jpg', url: 'https://music.apple.com/us/album/russian-roulette/1440775689?i=1440775735&uo=4' },
  { artist: 'WizTheMc & bees & honey', album: 'Show Me Love', year: 2025, genre: 'Pop', spineColor: '#915a33', spineInk: '#f7f4ed', art: '/images/records/wizthemc-bees-and-honey.jpg', url: 'https://music.apple.com/us/album/show-me-love/6766874205?i=6766874208&uo=4' },
  { artist: 'GauravV', album: '4 raws esdeekid', year: 2025, genre: 'Pop', spineColor: '#242525', spineInk: '#f7f4ed', art: '/images/records/esdeekid-4raws.jpg', url: 'https://music.apple.com/us/album/4-raws-esdeekid/1863820148?i=1863820149&uo=4' },
  { artist: 'Remuta', album: 'Chercher L\'argent', year: 2021, genre: 'Afro-Beat', spineColor: '#5e5d57', spineInk: '#f7f4ed', art: '/images/records/remuta-chercher-largent.jpg', url: 'https://music.apple.com/us/album/chercher-largent/6787354270?i=6787354271&uo=4' },
  { artist: 'The Chainsmokers', album: 'Don\'t Let Me Down (feat. Daya)', year: 2016, genre: 'Dance', spineColor: '#bdb390', spineInk: '#171717', art: '/images/records/chainsmokers-dont-let-me-down.jpg', url: 'https://music.apple.com/us/album/dont-let-me-down-feat-daya/1170699510?i=1170699706&uo=4' },
  { artist: 'Shawn Mendes', album: 'There\'s Nothing Holdin\' Me Bac', year: 2016, genre: 'Pop', spineColor: '#546c62', spineInk: '#f7f4ed', art: '/images/records/shawn-mendes-there-is-nothing-holding-me-back.jpg', url: 'https://music.apple.com/us/album/theres-nothing-holdin-me-back/1440892227?i=1440892573&uo=4' },
  { artist: '3 Dope Brothas', album: 'Doja (Originally Performed by ', year: 2022, genre: 'Karaoke', spineColor: '#495358', spineInk: '#f7f4ed', art: '/images/records/central-cee-doja.jpg', url: 'https://music.apple.com/us/album/doja-originally-performed-by-central-cee-instrumental/1639371505?i=1639371506&uo=4' },
  { artist: 'Arizona Zervas', album: 'ROXANNE', year: 2019, genre: 'Hip-Hop/Rap', spineColor: '#cfcfcf', spineInk: '#171717', art: '/images/records/arizona-zervas-roxanne.jpg', url: 'https://music.apple.com/us/album/roxanne/1496062760?i=1496062761&uo=4' },
  { artist: 'Kanye West, Big Sean, Pusha T ', album: 'Mercy', year: 2012, genre: 'Hip-Hop/Rap', spineColor: '#d8d8d8', spineInk: '#171717', art: '/images/records/kanye-west-mercy.jpg', url: 'https://music.apple.com/us/album/mercy/1443478391?i=1443478650&uo=4' },
  { artist: 'The Weeknd', album: 'After Hours', year: 2020, genre: 'R&B/Soul', spineColor: '#403729', spineInk: '#f7f4ed', art: '/images/records/the-weeknd-after-hours.jpg', url: 'https://music.apple.com/us/album/after-hours/1499378108?i=1499378615&uo=4' },
  { artist: 'JAWNY', album: 'Honeypie', year: 2019, genre: 'Alternative', spineColor: '#625246', spineInk: '#f7f4ed', art: '/images/records/jawny-honeypie.jpg', url: 'https://music.apple.com/us/album/honeypie/1536068346?i=1536068360&uo=4' },
  { artist: 'Tame Impala', album: 'Dracula', year: 2025, genre: 'Alternative', spineColor: '#403d37', spineInk: '#f7f4ed', art: '/images/records/tame-impala-dracula.jpg', url: 'https://music.apple.com/us/album/dracula/1842444456?i=1842444457&uo=4' },
  { artist: 'WizTheMc & bees & honey', album: 'Show Me Love', year: 2025, genre: 'Pop', spineColor: '#6e7b53', spineInk: '#f7f4ed', art: '/images/records/wizthemc-show-me-love.jpg', url: 'https://music.apple.com/us/album/show-me-love/6766786709?i=6766786711&uo=4' },
  { artist: 'The Weeknd', album: 'Starboy (feat. Daft Punk)', year: 2016, genre: 'R&B/Soul', spineColor: '#501a26', spineInk: '#f7f4ed', art: '/images/records/the-weeknd-starboy.jpg', url: 'https://music.apple.com/us/album/starboy-feat-daft-punk/1440870373?i=1440870375&uo=4' },
  { artist: 'Eminem', album: 'The Real Slim Shady (Live From', year: 2000, genre: 'Hip-Hop/Rap', spineColor: '#844841', spineInk: '#f7f4ed', art: '/images/records/eminem-the-real-slim-shady.jpg', url: 'https://music.apple.com/us/album/the-real-slim-shady-live-from-mtv-vmas-2000/1815859171?i=1815859197&uo=4' },
  { artist: 'Hotel Ugly', album: 'Shut up My Moms Calling', year: 2020, genre: 'Neo-Soul', spineColor: '#5d473f', spineInk: '#f7f4ed', art: '/images/records/hotel-ugly-shut-up.jpg', url: 'https://music.apple.com/us/album/shut-up-my-moms-calling/1617969394?i=1617969731&uo=4' },
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
  { title: 'Grid Systems in Graphic Design', spineTitle: 'Grid Systems', spineAuthor: 'JMB', author: 'Josef Müller-Brockmann', year: 1981, category: 'Graphic Design', spineColor: '#df6029', spineInk: '#171717', art: '/images/books/grid-systems.jpg', coverWidth: 411, coverHeight: 600, spine: 24, url: 'https://niggli.ch/en/products/rastersysteme-fur-die-visuelle-gestaltung' },
  { title: 'Refactoring UI', spineAuthor: 'AW+SS', author: 'Adam Wathan & Steve Schoger', year: 2018, category: 'UI Design', spineColor: '#2e3849', spineInk: '#f7f4ed', art: '/images/books/refactoring-ui.jpg', coverWidth: 758, coverHeight: 1014, spine: 24, url: 'https://refactoringui.com/' },
  { title: 'Universal Principles of UX', spineTitle: 'Universal UX', spineAuthor: 'IP', author: 'Irene Pereyra', year: 2023, category: 'UX Design', spineColor: '#2d292a', spineInk: '#f7f4ed', art: '/images/books/universal-principles-ux.jpg', coverWidth: 536, coverHeight: 628, spine: 24, url: 'https://www.quarto.com/books/9780760378045/universal-principles-of-ux' },
  { title: 'Just Enough Design', spineTitle: 'Just Enough', spineAuthor: 'TS', author: 'Taku Satoh', year: 2022, category: 'Design', spineColor: '#e4e3e3', spineInk: '#171717', art: '/images/books/just-enough-design.jpg', coverWidth: 714, coverHeight: 1000, spine: 24, url: 'https://www.chroniclebooks.com/products/just-enough-design-pb' },
  { title: 'The Creative Act', spineTitle: 'Creative Act', spineAuthor: 'RR', author: 'Rick Rubin', year: 2023, category: 'Creativity', spineColor: '#b8bcb4', spineInk: '#171717', art: '/images/books/creative-act.jpg', coverWidth: 306, coverHeight: 450, spine: 24, url: 'https://www.penguinrandomhouse.com/books/717356/the-creative-act-by-rick-rubin/' },
  { title: 'Steal Like an Artist', spineTitle: 'Steal Like Art', spineAuthor: 'AK', author: 'Austin Kleon', year: 2012, category: 'Creativity', spineColor: '#443b3d', spineInk: '#f7f4ed', art: '/images/books/steal-like-an-artist.jpg', coverWidth: 1200, coverHeight: 1193, spine: 22, url: 'https://workman.com/titles/austin-kleon/steal-like-an-artist/9780761169253/' },
  { title: 'Show Your Work!', spineAuthor: 'AK', author: 'Austin Kleon', year: 2014, category: 'Creativity', spineColor: '#c6a30d', spineInk: '#171717', art: '/images/books/show-your-work.jpg', coverWidth: 1200, coverHeight: 1200, spine: 22, url: 'https://workman.com/titles/austin-kleon/show-your-work/9780761178972/' },
  { title: 'Build', spineAuthor: 'TF', author: 'Tony Fadell', year: 2022, category: 'Product & Leadership', spineColor: '#d1d0d1', spineInk: '#171717', art: '/images/books/build.jpg', coverWidth: 429, coverHeight: 648, spine: 22, url: 'https://www.harpercollins.com/products/build-tony-fadell' },
  { title: 'Rework', spineAuthor: 'JF+DHH', author: 'Jason Fried & DHH', year: 2010, category: 'Business', spineColor: '#352f31', spineInk: '#f7f4ed', art: '/images/books/rework.png', coverWidth: 600, coverHeight: 905, spine: 20, url: 'https://basecamp.com/books/rework' },
  { title: 'The Great CEO Within', spineTitle: 'Great CEO', spineAuthor: 'MM', author: 'Matt Mochary', year: 2019, category: 'Leadership', spineColor: '#200f1b', spineInk: '#f7f4ed', art: '/images/books/great-ceo-within.jpg', coverWidth: 625, coverHeight: 1000, spine: 24, url: 'https://www.amazon.com/Great-CEO-Within-Tactical-Building/dp/0578599287' },
  { title: 'Make Something Wonderful: Steve Jobs in His Own Words', spineTitle: 'Make Something', spineAuthor: 'SJ', author: 'Steve Jobs', year: 2023, category: 'Biography & Memoir', spineColor: '#928c86', spineInk: '#171717', art: '/images/books/make-something-wonderful.jpg', coverWidth: 626, coverHeight: 996, spine: 26, url: 'https://book.stevejobsarchive.com/' },
  { title: 'How to American', spineAuthor: 'JOY', author: 'Jimmy O. Yang', year: 2018, category: 'Memoir', spineColor: '#4f4d50', spineInk: '#f7f4ed', art: '/images/books/how-to-american.jpg', coverWidth: 787, coverHeight: 1200, spine: 22, url: 'https://www.hachettebookgroup.com/titles/jimmy-o-yang/how-to-american/9780306903502/' },
  { title: 'Sword of Destiny', spineAuthor: 'AS', author: 'Andrzej Sapkowski', year: 1992, category: 'Fantasy', spineColor: '#b7b6ba', spineInk: '#171717', art: '/images/books/sword-of-destiny.jpg', coverWidth: 801, coverHeight: 1200, spine: 24, url: 'https://www.hachettebookgroup.com/titles/andrzej-sapkowski/sword-of-destiny/9780316389716/' },
  { title: 'Hustle Harder, Hustle Smarter', spineTitle: 'Hustle Smarter', spineAuthor: '50', author: '50 Cent', year: 2020, category: 'Business & Memoir', spineColor: '#60534c', spineInk: '#f7f4ed', art: '/images/books/hustle-harder.jpg', coverWidth: 428, coverHeight: 648, spine: 22, url: 'https://www.harpercollins.com/products/hustle-harder-hustle-smarter-curtis-50-cent-jackson' },
  { title: 'The Subtle Art of Not Giving a F*ck', spineTitle: 'The Subtle Art', spineAuthor: 'MM', author: 'Mark Manson', year: 2016, category: 'Self-Help', spineColor: '#ce470e', spineInk: '#171717', art: '/images/books/subtle-art.jpg', coverWidth: 667, coverHeight: 1000, spine: 26, url: 'https://www.harpercollins.com/products/the-subtle-art-of-not-giving-a-fck-mark-manson' },
]
