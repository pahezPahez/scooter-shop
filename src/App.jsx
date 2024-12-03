import React, { useContext } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import ProductList from './components/ProductList';
import ServiceList from "./components/ServiceList";
import TeamMember from './components/TeamMember';
import { products, teamMembers, services } from './data';
import Footer from "./components/Footer";
import './styles/global.css';
import { ThemeContext } from './components/ThemeContext';
import blackfriday from './assets/banner/blackfriday.webp';
import delivery from './assets/banner/delivery.webp';
import gbg1 from './assets/banner/gbg1.webp';
import gbg2 from './assets/banner/gbg2.webp';

const bannerImages = [blackfriday, delivery, gbg1, gbg2];

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <header role="header">
        <Header />
      </header>

      <main role="main">
        <Banner images={bannerImages} />
        <ProductList products={products} />
        <ServiceList services={services} />
        <TeamMember members={teamMembers} />
      </main>

      <footer role="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;