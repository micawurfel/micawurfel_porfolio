import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation("global");

  return (
    <>
      <section className='section section--inicio'>
        <h1 className='section__h1'>{t('home.title')}</h1>
        <h2 className='section__h2 section__h2--inicio'>Front-end developer</h2>

        <div className='section__circles'>
          <svg className='section__circle section__circle--circle1' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path d="M40.9,-50.9C54.3,-37.6,67.2,-25.9,68.8,-12.8C70.3,0.3,60.5,14.8,49,22.5C37.6,30.2,24.7,31.2,11.9,38.1C-0.8,45,-13.3,57.9,-28.8,60.4C-44.4,62.9,-63,55,-68.9,41.4C-74.7,27.8,-67.9,8.5,-64.7,-11.8C-61.6,-32.2,-62.3,-53.6,-52.1,-67.5C-42,-81.4,-21,-87.8,-3.6,-83.5C13.8,-79.3,27.6,-64.3,40.9,-50.9Z" transform="translate(100 100)" />
          </svg>
          <svg className='section__circle section__circle--circle2' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path d="M43.9,-52.5C55.6,-42.5,62.9,-27.4,66.1,-11.4C69.3,4.7,68.4,21.8,62.2,39C56,56.2,44.5,73.5,27.7,82.3C10.9,91.1,-11.2,91.3,-30.4,84.1C-49.6,76.9,-66,62.2,-69.5,45.3C-73.1,28.5,-63.8,9.4,-53.2,-2.2C-42.6,-13.8,-30.7,-18,-21.6,-28.5C-12.4,-39,-6.2,-55.8,4.9,-61.7C16.1,-67.6,32.2,-62.6,43.9,-52.5Z" transform="translate(100 100)" />
          </svg>
          <svg className='section__circle section__circle--circle3' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path d="M37.2,-38.2C50.4,-33.2,65,-23.6,63.5,-13.8C62.1,-4.1,44.7,5.9,36.8,22.8C28.9,39.8,30.4,63.7,20.5,75.6C10.7,87.5,-10.6,87.4,-23.2,77C-35.8,66.7,-39.8,46,-50.4,28.6C-61,11.2,-78.2,-2.8,-78.4,-15.9C-78.6,-29.1,-61.8,-41.4,-45.9,-45.9C-30,-50.4,-15,-47.2,-1.5,-45.4C12,-43.6,23.9,-43.2,37.2,-38.2Z" transform="translate(100 100)" />
          </svg>
          <svg className='section__circle section__circle--circle4' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.4,-30.1C32.5,-20.2,43.8,-14.9,49.7,-5.2C55.6,4.5,56.3,18.7,50.6,29.9C44.9,41.1,32.9,49.3,21.4,49.3C9.9,49.4,-1.1,41.3,-13.3,36.7C-25.6,32.2,-39.1,31.3,-41.4,25C-43.7,18.8,-34.8,7.1,-31.6,-4.7C-28.5,-16.5,-31.1,-28.4,-26.8,-39.1C-22.5,-49.9,-11.3,-59.5,-2.1,-57C7.1,-54.6,14.2,-40,23.4,-30.1Z" transform="translate(100 100)" />
          </svg>
        </div>
      </section>
    </>
  )
}
