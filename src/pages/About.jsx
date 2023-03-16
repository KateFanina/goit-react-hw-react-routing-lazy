import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

function About() {
  return (
    <main>
      <h1>About us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
        aliquid minima iste. Eos, perspiciatis cumque. Nihil animi enim soluta
        libero mollitia unde officiis nulla rerum! Eveniet autem reiciendis aut
        ipsam.
      </p>
      <ul>
        <li>
          <Link to="mission">Read about our mission</Link>
        </li>
        <li>
          <Link to="team">Get to know the team</Link>
        </li>
        <li>
          <Link to="reviews">Go through the reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
}
export default About;
