import "@/scss/Home.scss";
import ImageWebDescktop from "@/images/image-web-3-desktop.jpg";
import ImageWebMobile from "@/images/image-web-3-mobile.jpg";
import { Cards } from "@/components/Cards/Cards";

export const Home = () => {
  return (
    <div className="container-home">
      <div className="heareder-home">
        <div className="content grid-item">
          <div className="container-image-home">
            <img className="img-descktop" src={ImageWebDescktop} alt="" />
            <img className="img-mobile" src={ImageWebMobile} alt="" />
          </div>
          <div className="info-content">
            <div className="title-info">
              <h1>
                The Bright
                <br />
                Future of
                <br /> Web 3.0 ?
              </h1>
            </div>
            <div className="noti-info">
              <p>
                We dive into the next evolution of the web that <br />
                claims to put the power of the platforms back <br /> into the
                hands of the people. But is it really <br /> fulfiling its
                promice?
              </p>
              <button className="button-info-home">READ MORE</button>
            </div>
          </div>
        </div>
        <aside className="aside grid-item">
          <h1 className="title-aside">New</h1>
          <div className="content-aside">
            <div className="info-aside border">
              <h3>Hydrogen VS Electric Cars</h3>
              <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>
            <div className="info-aside border">
              <h3>The Downsides of Artistry</h3>
              <p>
                What are the possible adverse effects of on-demand Al image
                generation?
              </p>
            </div>
            <div className="info-aside">
              <h3>Is VC Funding Drying Up?</h3>
              <p>
                Private funding by Vc Firms is down 50% YOY. we take a look at
                what that means.
              </p>
            </div>
          </div>
        </aside>
      </div>
      <div className="cards-home">
        <Cards />
      </div>
    </div>
  );
};
