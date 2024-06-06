import "./Navbar.css";
import { HeartOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import AnchorLink from "antd/es/anchor/AnchorLink";

const Navbar = () => {
  return (
    <nav className='navbar'>
        <AnchorLink href='/home' title className="anchorImg">
            <img className="agCulturaViva" src="https://altagracia.ar/wp-content/uploads/2022/01/logo-AG-cultura-viva.png" alt="" />
        </AnchorLink>
        <div className='centerItems'>
            <ol className='olItems'>
                <li>
                    <Link to="#home">
                        Inicio
                    </Link>
                </li>                
                {/* <li>
                    <Link to="#nosotros">
                        Nosotros
                    </Link>
                </li> */}
                <li>
                    <Link to="#info">
                        Info
                    </Link>
                </li>
                <li>
                    <Link to="#contacto">
                        Contacto
                    </Link>
                </li>
            </ol>
        </div> 
        <div className='endItems'>
            <ol className='olItems2'>
                <li>
                    <Link to=""><SearchOutlined /></Link>
                </li>
                <li>
                    <Link to=""><HeartOutlined /></Link>
                </li>
                <li>
                    <Link to=""><UserOutlined /></Link>
                </li>
            </ol>
        </div>     
    </nav>
  )
}

export default Navbar
