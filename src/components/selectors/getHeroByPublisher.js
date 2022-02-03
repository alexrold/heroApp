import { heroes } from '../data/heroes';


export const GetHeroByPublisher = (publisher) => {
  const validPublisher = ['Marvel Comics', 'DC Comics'];

  if (!validPublisher.includes(publisher)) {

    throw new Error(`${publisher} is not valid publisher.`);
  }

  return heroes.filter(hero => hero.publisher === publisher);
}
