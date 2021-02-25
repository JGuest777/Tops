import Grid from '@material-ui/core/Grid';
import useInstagram from '../hooks/useInstagram';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Social({ apiUrl }) {
  const gramz = useInstagram({ apiUrl });

  return (
    <div className="social">
      <h1>follow us</h1>
      <div className="social__link">
        <a
          href="https://www.instagram.com/tops_hair_salon/?hl=en"
          target="_blank"
        >
          <FontAwesomeIcon
            className="social__icon"
            icon={['fab', 'instagram']}
            size="2x"
          />
          <p>@tops_hair_salon</p>
        </a>
      </div>
      {/* 4 col imgs */}

      <Grid container spacing={1}>
        {gramz.map((gram, i) => (
          <Grid key={i} item xs={6} sm={6} md={3}>
            <a href={gram.url} target="_blank" key={gram.id}>
              <img src={gram.thumb} alt={gram.caption} loading="lazy" />
            </a>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
