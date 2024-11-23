'use client'

import styles from './Certificaty.module.scss';
import React from 'react';
import Image from 'next/image';
import CpcCertificate from '/public/imgCertificaty/CpcCertificate.webp';
import CertificateOfCompliance from '/public/imgCertificaty/CertificateOfCompliance.webp';
import CprCertificateOfDrawingBoard from '/public/imgCertificaty/CprCertificateOfDrawingBoard.webp';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CertificateProps {
  id?: string;
}

const Certificate:React.FC<CertificateProps> = ({id}) =>{
  const settings = {
    dots: false,
    speed: 4000,
    slidesToScroll: 1,
    slidesToShow: 2,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    centerMode: true,
    centerPadding: '20px',
    pauseOnHover: true,
    focusOnSelect: true,
    arrows : false,
    responsive: [
      {   
        breakpoint: 1375, 
        settings: {
          slidesToShow: 1, 
          centerPadding: '260px',
        }
      },
      {   
        breakpoint: 1290, 
        settings: {
          slidesToShow: 1, 
          centerPadding: '245px',
        }
      },
      {   
        breakpoint: 1100, 
        settings: {
          slidesToShow: 1, 
          centerPadding: '210px',
        }
      },
      {   
        breakpoint: 1000, 
        settings: {
          slidesToShow: 1, 
          centerPadding: '140px',
        }
      },
      {   
        breakpoint: 900, 
        settings: {
          slidesToShow: 1, 
          centerPadding: '100px',
        }
      },
      {   
        breakpoint: 800, 
        settings: {
          slidesToShow: 1, 
          centerPadding: '80px',
        }
      },
      {   
        breakpoint: 500, 
        settings: {
          slidesToShow: 1, 
          centerPadding: '40px',
        }
      },
      {   
        breakpoint: 425, 
        settings: {
          slidesToShow: 1, 
          centerPadding: '18px',
        }
      },
      {   
        breakpoint: 370, 
        settings: {
          slidesToShow: 1, 
          centerPadding: '15px',
        }
      },
      {   
        breakpoint: 360, 
        settings: {
          slidesToShow: 1, 
          centerPadding: '13px',
        }
      },
    ]
  }
  return(
    <section className={styles.container}>
      <h1 className={styles.container__topic}>Certificates</h1>
        <Slider {...settings}>
         <div className={styles.containerCertificate__certificateImg}>
            <Image
              unoptimized
              className={`${styles.containerCertificate__Img} ${styles.zomm}`} 
              src={CpcCertificate}
              alt='Certificate 1'
              width={450}
              height={600}
            />
          </div>

          <div className={styles.containerCertificate__certificateImg}>
            <Image
              unoptimized
              className={`${styles.containerCertificate__Img} ${styles.zomm}`} 
              src={CprCertificateOfDrawingBoard}
              alt='Certificate 3'
              width={450}
              height={600}
            />
          </div>

          <div className={styles.containerCertificate__certificateImg}>
            <Image
              unoptimized
              className={`${styles.containerCertificate__Img} ${styles.zomm}`} 
              src={CertificateOfCompliance}
              alt='Certificate 2'
              width={450}
              height={600}
            />
          </div>
      </Slider>

      <a href='imgCertificaty/file/10P.zip' download="Certificate desc">
        <p className={styles.seeDetail}>Download Test Reports</p>
      </a>
    </section>
  );
}

export default Certificate;