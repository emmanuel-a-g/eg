import Link from 'next/link';
import classes from './MainNavigation.module.css';
function MainNavigation() {
  return (
    <header className={classes.header}>
      <div>Emmanuel Garcia</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/works'>All my works</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation;