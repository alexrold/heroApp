import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../hero/HeroCard';
import { getHeroByName } from '../selectors/getHeroByName';


export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);
  const [values, handleInputChange, reset] = useForm({ searchText: q, });

  const { searchText } = values;
  const handleSearch = (event) => {
    event.preventDefault()
    navigate(`?q=${searchText}`);
  }

  const heroesFiltereded = useMemo(() => getHeroByName(q), [q])



  return (
    <>
      <h1>Buscar Héroe</h1>
      <hr />

      <div className="row">
        <div className="col-5 mt-3">
          <h4 className='text-center' >Buscar: {searchText}</h4>
          <hr />

          <form onSubmit={handleSearch} >
            <input
              type="text"
              placeholder='Busca un Héroe'
              className='form-control'
              name='searchText'
              autoComplete='off'
              value={searchText}
              onChange={handleInputChange}
            />
            <div className="d-grid">
              <button
                className='btn btn-outline-primary mt-3 '
                type='submit'
              >
                Buscar
              </button>
            </div>

          </form>
        </div>

        <div className="col-7">
          <h4>Resultado de la  busqueda</h4>
          <hr />
          {
            (q === '')
              ? <div className="alert alert-info animate__animated animate__fadeIn"> Buscar un heroe </div>
              : (heroesFiltereded.length === 0)
                ? <div className="alert alert-danger"> No hay resultados para:  <b>{q}</b> </div>
                : heroesFiltereded.map(hero => (
                  <HeroCard
                    key={hero.id}
                    {...hero}
                  />
                ))
          }

        </div>
      </div>

    </>
  )
}
