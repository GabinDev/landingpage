import CardService from "../components/CardService";
import Header from "../components/Header";
import IconButton from "../components/IconButton";
import styles from '../styles/landingpage/common.module.css';
import app from '../styles/app.module.css';
import Button from "../components/Button";
import Image from "next/image";
import Switch from "../components/Switch";
import Link from "next/link";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <>
      <Header />
      <section >
        <div className={app.centeredContainer}>

          <div className={styles.presentation}>
            <span>OUR SERVICES</span>
            <div className={styles.rowRight}>
              <span className={styles.text1}>
                We Are Providing Digital services
              </span>
              <div className={styles.rowIcons}>
                <IconButton
                  src='/svg/arrow-left.svg'
                />
                <IconButton
                  src='/svg/arrow-right.svg'
                  active
                />
              </div>
            </div>
          </div>


          <div className={styles.cardServiceContainer}>
            <CardService active />
            <CardService />
            <CardService />
          </div>


          <div className={styles.row1}>
            <div
              style={{
                width: '587px',
                height: '100%',
                background: '#E7E7E7',
              }}
            />
            <div className={styles.aboutContainer}>
              <span style={{ color: '#2370C8' }}>ABOUT US</span>
              <span className={styles.text1}>
                We design, build brands <br />
                & digital projects.
              </span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit <br /><br />

                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident,
              </p>
              <div>
                <Button>Read More</Button>
              </div>
            </div>
          </div>
        </div>


        <div className={styles.row2}>
          <div className={app.centeredContainer}>
            <div className={styles.row2Items}>
              <div className={styles.row2Item}>
                <Image
                  src='/svg/card_image.svg'
                  alt="image"
                  width={79}
                  height={79}
                />
                <span>Smart planing</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur <br />
                  adipiscing elit, sed do eiusmod tempor <br />
                  incididunt ut labore et dolore
                </p>
              </div>
              <div className={styles.row2Item}>
                <Image
                  src='/svg/card_image.svg'
                  alt="image"
                  width={79}
                  height={79}
                />
                <span>Smart planing</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur <br />
                  adipiscing elit, sed do eiusmod tempor <br />
                  incididunt ut labore et dolore
                </p>
              </div>
              <div className={styles.row2Item}>
                <Image
                  src='/svg/card_image.svg'
                  alt="image"
                  width={79}
                  height={79}
                />
                <span>Smart planing</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur <br />
                  adipiscing elit, sed do eiusmod tempor <br />
                  incididunt ut labore et dolore
                </p>
              </div>
            </div>
          </div>
        </div>



        <div className={app.centeredContainer}>
          <div className={styles.column1}>
            <span>OUR SERVICES</span>
            <span className={styles.text1}>Take A Look At Our Latest Work</span>
            <div className={styles.cards}>
              <div className={styles.column1Card} />
              <div className={styles.column1Card} />
              <div className={styles.column1Card} />
              <div className={styles.column1Card} />
              <div className={styles.column1Card} />
              <div className={styles.column1Card} />
            </div>

            <div className={styles.column1Buttons}>
              <IconButton
                src='/svg/arrow-left.svg'
              />
              <IconButton
                src='/svg/arrow-right.svg'
                active
              />
            </div>
          </div>
        </div>



        <div className={styles.row3}>
          <div className={app.centeredContainer}>
            <div className={styles.column2}>
              <span style={{ color: '#2370C8' }}>OUR SERVICES</span>
              <span className={styles.text1}>Take A Look At Our Latest Work</span>

              <div className={styles.cardsColumn2}>
                <div className={styles.cardColumn2}>
                  <div className={styles.cardContentColumn2}>
                  </div>
                  <div className={styles.cardDivAbsoluteColumn} >
                    <span style={{ zIndex: 2 }}>
                      Duglas Walker<br />  <span style={{ color: 'rgba(0,0,0,.5)' }}> SHIEF STAFF</span>
                    </span>
                  </div>
                </div>
                <div className={styles.cardColumn2}>
                  <div className={styles.cardContentColumn2}>
                  </div>
                  <div className={styles.cardDivAbsoluteColumn} >
                    <span style={{ zIndex: 2 }}>
                      Caroline Harrison <br />  <span style={{ color: 'rgba(0,0,0,.5)' }}>FOUNDER & NANAGER</span>
                    </span>
                  </div>
                </div>
                <div className={styles.cardColumn2}>
                  <div className={styles.cardContentColumn2}>
                  </div>
                  <div className={styles.cardDivAbsoluteColumn} >
                    <span style={{ zIndex: 2 }}>
                      Safia Simpson<br />  <span style={{ color: 'rgba(0,0,0,.5)' }}>WEB DESIGNER</span>
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>




        <div className={app.centeredContainer} >
          <div className={styles.row4} >
            <div>
              <span style={{ color: '#2370C8' }}>OUR PRICING</span><br />
              <span className={styles.text1}>Choose A Plan That’s Right For You</span>
            </div>
            <Switch />
          </div>
          <div className={styles.cardsContainerRow4}>
            <div className={styles.cardRow4}>
              <span className={styles.titleCardRow4}>Basic Plan</span>
              <Image
                src='/svg/card_image.svg'
                alt="image"
                width={79}
                height={79}
              />
              <div className={styles.priceContaienrRow4}>
                <span className={styles.pricecardRow4}>$50</span>
                <span>/Month</span>
              </div>
              <p>
                Graphic Design
                Web Design
                UI/UX
                HTML/CSS
                SEO Marketing
                Business Analysis
              </p>
              <Button>Start Now</Button>
            </div>
            <div
              className={styles.cardRow4}
              style={{ background: '#2370C8', color: 'white' }}
            >
              <span className={styles.titleCardRow4} style={{ color: 'white' }}>Standart Plan</span>
              <Image
                src='/svg/card_image.svg'
                alt="image"
                width={79}
                height={79}
              />
              <div className={styles.priceContaienrRow4} style={{ color: 'white' }}>
                <span className={styles.pricecardRow4} style={{ color: 'white' }}>$99</span>
                <span>/Month</span>
              </div>
              <p style={{ color: 'white' }}>
                Graphic Design
                Web Design
                UI/UX
                HTML/CSS
                SEO Marketing
                Business Analysis
              </p>
              <Button style={{ background: 'white', color: '#2370C8' }}>Start Now</Button>
            </div>
            <div className={styles.cardRow4}>
              <span className={styles.titleCardRow4}>Premium Plan</span>
              <Image
                src='/svg/card_image.svg'
                alt="image"
                width={79}
                height={79}
              />
              <div className={styles.priceContaienrRow4}>
                <span className={styles.pricecardRow4}>$150</span>
                <span>/Month</span>
              </div>
              <p>
                Graphic Design
                Web Design
                UI/UX
                HTML/CSS
                SEO Marketing
                Business Analysis
              </p>
              <Button>Start Now</Button>
            </div>
          </div>
        </div>




        <div className={styles.column3}>
          <span className={styles.column3Title}> We’re trusted by clients.</span>
          <div className={app.centeredContainer}>
            <div className={styles.row5}>
              <div className={styles.cardRow5}>
                <div
                  style={{ width: '68px', height: '68px', borderRadius: '50%', background: '#E7E7E7' }}
                />
                <div className={styles.cardTitleContainerRow5}>
                  <span style={{ fontWeight: '500' }}>Mina Whatson</span>
                  <span>CONSULTANT</span>
                </div>
                <p>
                  There are many variations of passages of Lorem Ipsum available, but the
                  majority have suffered alteration in some form, by injected humour,
                  or randomised words which don t look even slightly believable.
                  If you are going to use a passage of Lorem Ipsum,
                </p>
              </div>
              <div className={styles.cardRow5}>
                <div
                  style={{ width: '68px', height: '68px', borderRadius: '50%', background: '#E7E7E7' }}
                />
                <div className={styles.cardTitleContainerRow5}>
                  <span style={{ fontWeight: '500' }}>Mina Whatson</span>
                  <span>CONSULTANT</span>
                </div>
                <p>
                  There are many variations of passages of Lorem Ipsum available, but the
                  majority have suffered alteration in some form, by injected humour,
                  or randomised words which don t look even slightly believable.
                  If you are going to use a passage of Lorem Ipsum,
                </p>
              </div>
            </div>
          </div>
        </div>



        <div className={app.centeredContainer}>
          <div className={styles.row6}>
            <div className={styles.row61}>
              <span style={{ color: '#2370C8' }}>OUR BLOG</span>
              <span className={styles.titleRow61}><span>Letest</span> News & Blog</span>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                sed do eiusmod tempor incididunt labo.
              </p>
              <form className={styles.inputEmailContainer}>
                <input
                  type="text"
                  className={styles.inputEmail}
                  placeholder='Enter Your Email'
                />
                <button>
                  <Image
                    src='/svg/arrow2.svg'
                    height={20}
                    width={20}
                    alt='image'
                  />
                </button>
              </form>
            </div>
            <div className={styles.row62}>
              <span className={styles.row62Title}>
                Maecenas laoree efficiture sagittis<br />
                aliquam eleifend nisl.<br /><br />
                <span>Posted 7 MArch, 2020</span>
              </span>
              <p style={{ color: '#F9F9F9' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                sed do eiusmod tempor incididunt labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip
                ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident,
              </p>
              <Link
                href="#"
                className={styles.linkReadMore}
              >
                <span>
                  Read More
                </span>
                <Image src='/svg/arrow2.svg' width={24} height={24} alt='' />
              </Link>
            </div>
            <div
              className={styles.row62}
              style={{
                background: 'white',
                border: '1px solid #3782D7'
              }}
            >
              <span className={styles.row62Title} style={{ color: '#262A4E' }}>
                Maecenas laoree efficiture sagittis<br />
                aliquam eleifend nisl.<br /><br />
                <span style={{ color: '#2370C8' }}>Posted 7 MArch, 2020</span>
              </span>
              <p style={{ color: ' #646464' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                sed do eiusmod tempor incididunt labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip
                ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident,
              </p>
              <Link
                href="#"
                className={styles.linkReadMore}
              >
                <span style={{ color: '#2370C8' }}>
                  Read More
                </span>
                <Image src='/svg/arrow4.svg' width={24} height={24} alt='' />
              </Link>
            </div>

            <div className={styles.buttonsRow6}>
              <IconButton
                src='/svg/arrow-left.svg'
              />
              <IconButton
                src='/svg/arrow-right.svg'
                active
              />
            </div>
          </div>
        </div>


      </section>

      <Footer/>
    </>
  )
}
