import logo from './assets/logo.jpg';

export default function Header() {
  return (
    <nav className='navbar bg-light mb-4 p-1'>
      <div className='container'>
        <a className='navbar-brand' href='/'>
          <div className='d-flex'>
            <img src={logo} alt='logo' className='mr-7' />
            <div className='nav-header'>TaskMgmt</div>
          </div>
        </a>
      </div>
    </nav>
  );
}
