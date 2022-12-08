import { HeroesComponent } from './heroes.component';
import { of } from 'rxjs';
import { Hero } from '../hero.model';

describe('Heroes Component', () => {
  let component: HeroesComponent;
  let HEROES: Hero[];
  let mockHeroService: any;

  beforeEach(() => {
    HEROES = [
      { id: 1, name: 'Hero 1', strength: 8 },
      { id: 2, name: 'Hero 2', strength: 1 },
      { id: 3, name: 'Hero 3', strength: 4 },
      { id: 4, name: 'Hero 4', strength: 9 }
    ]

    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero'])

    component = new HeroesComponent(mockHeroService);
  })

  describe('delete', () => {
    it('should remove the indicated hero from list', () => {
      component.heroes = HEROES;

      mockHeroService.deleteHero.and.returnValue(of(true))

      let random = Math.floor(Math.random() * HEROES.length);
      let afterDelete = component.heroes.filter((_, i) => i !== random);
      let afterValue = JSON.stringify(afterDelete);

      component.delete(HEROES[random]);

      let afterValue_Heroes = JSON.stringify(component.heroes);

      expect(afterValue_Heroes).toBe(afterValue)
    })

    it('should call "deleteHero"', () => {
      component.heroes = HEROES;

      mockHeroService.deleteHero.and.returnValue(of(true))

      let random = Math.floor(Math.random() * HEROES.length);
      component.delete(HEROES[random]);

      expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[random])
    })
  })
})
