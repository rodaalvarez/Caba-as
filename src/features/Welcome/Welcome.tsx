import "./Welcome.css"
import { HomeOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import Container from '../../components/Container/Container';
import { useLocation, useNavigate } from "react-router";
import Info from "../Info/Info";
import { useEffect } from "react";
const { Meta } = Card;

const Welcome = () => {
    const isabel = process.env.PUBLIC_URL + '/isabel7.jpg';
    const cholito = process.env.PUBLIC_URL + '/cholito29.jpg';
    const navigate = useNavigate();
    const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  
  return (
    <main id="home">
        <section>
            <Container className='cardContainer'>
                <Card
                    className="cardItem"
                    data-aos="fade-right"
                    style={{ width: 300, border : "3px solid black", cursor: "pointer" }}
                    cover={
                    <img
                        alt="example"
                        src={isabel}
                    />
                    }
                    actions={[
                    <InfoCircleOutlined onClick={()=>navigate("#isabel")} />,
                    ]}
                >
                    <Meta
                        avatar={<HomeOutlined />}
                        title="Cabaña Isabel"
                        description=""
                    />
                </Card>
                <Card
                    className="cardItem"
                    data-aos="fade-left"
                    style={{ width: 300, border : "3px solid black", cursor: "pointer" }}
                    cover={
                    <img
                        alt="example"
                        src={cholito}
                    />
                    }
                    actions={[
                    <InfoCircleOutlined onClick={()=>navigate("#cholito")}/>,
                    ]}
                >
                    <Meta
                        avatar={<HomeOutlined />}
                        title={`Dpto Cholito`}
                        description=""
                    />
                </Card>
            </Container>    
        </section>
        <article id="info">
            <Info />
        </article>
    </main>
  )
}

export default Welcome
