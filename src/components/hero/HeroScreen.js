import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { heroImagesPath } from '../../helpers/heroImagesPath';
import { GetHeroById } from '../selectors/getHeroById';

export const HeroScreen = () => {
  const { hero_id } = useParams();

  const hero = useMemo(() => GetHeroById(hero_id), [hero_id]);

  const navigate = useNavigate();


  if (!hero) {
    return <Navigate to="/" />
  }

  const handleReturn = () => {
    navigate(-1);
  }

  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  } = hero;



  return (
    <div className='row mt-5' >

      <div className="col-4">
        <img src={heroImagesPath(id)} alt={superhero} className='img-thumbnail animate__animated animate__fadeInRight' />
      </div>

      <div className="col-8 animate__animated animate__fadeIn animate__slow	3s">
        <h3>{superhero}</h3>

        <ul className='list-group list-group-flush' >

          <li className='list-group-item' > <b>Alter Ego:</b> {alter_ego} </li>
          <li className='list-group-item' > <b>Publisher:</b> {publisher} </li>
          <li className='list-group-item' > <b>First Appearance:</b> {first_appearance} </li>

          <div className="ms-2">
            <h5 className='mt-3' >Characters</h5>
            <p>{characters}</p>
          </div>

          <button
            className='btn btn-info mt-3 animate__animated animate__fadeInUp '
            onClick={handleReturn}
          >
            <b>Regresar</b>
          </button>
        </ul>
      </div>
    </div>
  )
}
