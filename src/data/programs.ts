export interface Program {
  id: number;
  university: string;
  country: string;
  flag: string;
  description: string;
  fullDescription: string;
  programs: string[];
  tuition: string;
  intakeMonths: string;
  ranking: string;
  website: string;
}

export const programs: Program[] = [
  {
    id: 1,
    university: 'University of Toronto',
    country: 'Canada',
    flag: '🇨🇦',
    description: 'Top ranked university offering multiple international programs.',
    fullDescription:
      'The University of Toronto is a public research university in Toronto, Ontario, Canada. It is consistently ranked as one of the top universities in the world, known for its research output, academic excellence, and diverse international student community.',
    programs: ['Computer Science', 'Business Administration', 'Engineering', 'Medicine', 'Law'],
    tuition: '$30,000 – $55,000 CAD / year',
    intakeMonths: 'September, January',
    ranking: '#1 in Canada | Top 25 Globally',
    website: 'https://www.utoronto.ca',
  },
  {
    id: 2,
    university: 'University of Melbourne',
    country: 'Australia',
    flag: '🇦🇺',
    description: 'Popular destination for international students with world-class facilities.',
    fullDescription:
      'The University of Melbourne is a public research university located in Melbourne, Australia. Founded in 1853, it is the second oldest university in Australia and is consistently ranked among the top universities worldwide, offering world-class education across a wide range of disciplines.',
    programs: ['Arts & Humanities', 'Sciences', 'Engineering', 'Architecture', 'Education'],
    tuition: '$35,000 – $50,000 AUD / year',
    intakeMonths: 'February, July',
    ranking: '#1 in Australia | Top 35 Globally',
    website: 'https://www.unimelb.edu.au',
  },
  {
    id: 3,
    university: 'University of Edinburgh',
    country: 'United Kingdom',
    flag: '🇬🇧',
    description: 'Historic university with a strong global reputation and vibrant campus life.',
    fullDescription:
      'The University of Edinburgh is one of the world\'s top universities and Scotland\'s second oldest university. Established in 1583, it has a rich history of academic excellence and is known for producing Nobel laureates, famous alumni, and cutting-edge research.',
    programs: ['Medicine', 'Informatics', 'Law', 'Social Sciences', 'Arts'],
    tuition: '£20,000 – £35,000 / year',
    intakeMonths: 'September',
    ranking: 'Top 30 Globally',
    website: 'https://www.ed.ac.uk',
  },
  {
    id: 4,
    university: 'ETH Zurich',
    country: 'Switzerland',
    flag: '🇨🇭',
    description: 'Europe\'s leading science and technology university with Nobel Prize legacy.',
    fullDescription:
      'ETH Zurich is a public research university in Zürich, Switzerland. Founded in 1855, it has produced 21 Nobel Prize winners and is consistently ranked among the top universities in the world, especially in engineering and natural sciences.',
    programs: ['Computer Science', 'Mechanical Engineering', 'Physics', 'Mathematics', 'Architecture'],
    tuition: 'CHF 1,500 / semester (very affordable)',
    intakeMonths: 'September, February',
    ranking: 'Top 10 Globally',
    website: 'https://ethz.ch',
  },
  {
    id: 5,
    university: 'National University of Singapore',
    country: 'Singapore',
    flag: '🇸🇬',
    description: 'Asia\'s top university offering world-class education in a global city-state.',
    fullDescription:
      'The National University of Singapore (NUS) is the oldest and largest higher education institution in Singapore. It offers a comprehensive portfolio of disciplines and is ranked as Asia\'s top university, providing a truly global experience in one of the world\'s most vibrant cities.',
    programs: ['Computing', 'Business', 'Engineering', 'Medicine', 'Law'],
    tuition: 'SGD $17,000 – $35,000 / year',
    intakeMonths: 'August, January',
    ranking: '#1 in Asia | Top 15 Globally',
    website: 'https://nus.edu.sg',
  },
  {
    id: 6,
    university: 'Technical University of Munich',
    country: 'Germany',
    flag: '🇩🇪',
    description: 'Germany\'s premier technical university with low tuition and high quality.',
    fullDescription:
      'TU Munich is one of Germany\'s best and most prestigious technical universities. It offers a combination of applied sciences, engineering, and natural sciences, with very low tuition fees, making it a top choice for international students who want quality education at minimal cost.',
    programs: ['Informatics', 'Mechanical Engineering', 'Aerospace', 'Biosciences', 'Management'],
    tuition: '€0 – €3,000 / year (semester fee only)',
    intakeMonths: 'October, April',
    ranking: 'Top 50 Globally',
    website: 'https://www.tum.de',
  },
  {
    id: 7,
    university: 'University of British Columbia',
    country: 'Canada',
    flag: '🇨🇦',
    description: 'Research powerhouse on Canada\'s Pacific coast with stunning surroundings.',
    fullDescription:
      'The University of British Columbia is a public research university located in Vancouver and Kelowna, British Columbia. Known for beautiful campus settings and excellent research output, UBC consistently ranks among the top 40 universities in the world.',
    programs: ['Commerce', 'Computer Science', 'Forestry', 'Arts', 'Science'],
    tuition: '$28,000 – $45,000 CAD / year',
    intakeMonths: 'September, January, May',
    ranking: 'Top 40 Globally',
    website: 'https://www.ubc.ca',
  },
  {
    id: 8,
    university: 'University of Amsterdam',
    country: 'Netherlands',
    flag: '🇳🇱',
    description: 'International hub for learning in the heart of Europe\'s most diverse city.',
    fullDescription:
      'The University of Amsterdam is a public research university located in Amsterdam, Netherlands. With 30,000+ students offering over 200 English-taught programs, it is one of the most international universities in Europe, celebrated for academic freedom and progressive thinking.',
    programs: ['Economics', 'Psychology', 'Law', 'Political Science', 'Digital Humanities'],
    tuition: '€2,000 – €15,000 / year',
    intakeMonths: 'September, February',
    ranking: 'Top 60 Globally',
    website: 'https://www.uva.nl',
  },
];
