import React, { Component } from "react";
import "../styles/home.css";
import "react-bulma-components/dist/react-bulma-components.min.css";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="first">
          <div className="one">
            <div className="term">
              <img
                className="center"
                src={require("../images/logo.svg")}
                alt="house"
              />
            </div>
          </div>
          <div className="columns is-mobile">
            <div className="column">
              <p id="kill" className="kill is-size-2">
                A history of everything you copy
              </p>
              <p className="ki is-size-6">
                {" "}
                Clipboard allows you to track and organize everything you copy.
                Instantly <br /> access your clipboard on all your devices.
              </p>
            </div>
          </div>
          <div className="columns is-centered">
            <div className="col">
              <p className="control">
                <button id="button" className="button is-rounded is-large">
                  Download for iOS
                </button>
              </p>
            </div>
            <div className="col">
              {" "}
              <p className="contro">
                <button id="buttons" className="button is-rounded is-large">
                  Download for Mac
                </button>
              </p>
            </div>
          </div>
          <div id="can" className="columns is-mobile">
            <div className="column">
              <p className="kill is-size-3">Keep track of your snippets</p>
              <p className="kill is-size-6">
                Clipboard instantly stores any item you copy in the cloud,
                meaning you can access
                <br /> your snippets immediately on all your devices. Our Mac
                and iOS apps will help you <br /> organize everything.
              </p>
            </div>
          </div>
          <div id="ll" className="columns">
            <div id="you" className="column is-narrow">
              <div id="lol" className="bx">
                <img
                  className="cente"
                  src={require("../images/image-computer.png")}
                  alt="house"
                />
              </div>
            </div>
            <div id="hi" className="column">
              <div id="bug" className="bx">
                <p className="ill is-size-3">Quick Search</p>
                <p className="subtitle is-size-6">
                  Easily search your snippets by content,
                  <br /> category, web address, application, and more.
                </p>{" "}
                <div id="kool">
                  <p className="ill is-size-3"> iCloud Sync</p>
                  <p className="subtitle is-size-6">
                    Instantly saves and syncs snippets across all <br />
                    your devices.
                  </p>
                </div>
                <div id="kool">
                  <p className="ill is-size-3">Complete History </p>
                  <p className="subtitle is-size-6">
                    Retrieve any snippets from the first moment
                    <br /> you started using the app.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="kk" className="columns is-mobile">
            <div className="column">
              <p className="kill is-size-2">Access clipboard anywhere</p>
              <p className="kill is-size-5">
                Whether you’re on the go, or at your computer, you can access
                all your Clipboard <br />
                snippets in a few simple clicks
              </p>
            </div>
          </div>
          <div className="on">
            <div className="ter">
              <img
                className="cent"
                src={require("../images/image-devices.png")}
                alt="house"
              />
            </div>
          </div>
          <div className="columns is-mobile">
            <div className="column">
              <p className="kill is-size-2">Supercharge your workflow</p>
              <p className="kill is-size-5">
                We’ve got the tools to boost your productivity.
              </p>
            </div>
          </div>
          <div id="long" className="columns">
            <div className="column is-4">
              <div>
                <img
                  className="center"
                  src={require("../images/icon-blacklist.svg")}
                  alt="house"
                />
                <p className="kill is-size-3">Create blacklists</p>
                <p className="kill is-size-5">
                  Ensure sensitive information never makes its way to your
                  clipboard by excluding certain sources.
                </p>
              </div>
            </div>
            <div className="column is-4">
              {" "}
              <div>
                <img
                  className="center"
                  src={require("../images/icon-text.svg")}
                  alt="house"
                />
                <p className="kill is-size-3">plain text snippets</p>
                <p className="kill is-size-5">
                  Remove unwanted formatting from copied text for a consistent
                  look
                </p>
              </div>
            </div>
            <div className="column is-4">
              {" "}
              <div>
                <img
                  className="center"
                  src={require("../images/icon-preview.svg")}
                  alt="house"
                />
                <p className="kill is-size-3">Sneak preview</p>
                <p className="kill is-size-5">
                  Quick preview of all snippets on your Clipboard for easy
                  access
                </p>
              </div>
            </div>
          </div>
          <div id="lil" className="columns">
            <div className="column">
              {" "}
              <img
                className="cen"
                src={require("../images/logo-google.png")}
                alt="house"
              />
            </div>
            <div className="column">
              {" "}
              <img
                className="cen"
                src={require("../images/logo-ibm.png")}
                alt="house"
              />
            </div>
            <div className="column">
              {" "}
              <img
                className="cen"
                src={require("../images/logo-microsoft.png")}
                alt="house"
              />
            </div>
            <div className="column">
              {" "}
              <img
                className="cen"
                src={require("../images/logo-hp.png")}
                alt="house"
              />
            </div>
            <div className="column">
              {" "}
              <img
                className="cen"
                src={require("../images/logo-vector-graphics.png")}
                alt="house"
              />
            </div>
          </div>
          <div id="monk" className="columns is-mobile">
            <div className="column">
              <p className="kill is-size-1">Clipboard for iOS and Mac OS</p>
              <p className="kill is-size-5">
                {" "}
                Available for free on the App Store. Download for Mac or iOS,
                sync with iCloud <br />
                and you’re ready to start adding to your clipboard
              </p>
            </div>
          </div>
          <div id="lop" className="columns is-centered">
            <div className="col">
              <p className="control">
                <button id="button" className="button is-rounded is-large">
                  <p className="is-size-5"> Download for iOS</p>
                </button>
              </p>
            </div>
            <div className="col">
              {" "}
              <p className="contro">
                <button id="buttons" className="button is-rounded is-large">
                  <p className="is-size-5">Download for Mac</p>
                </button>
              </p>
            </div>
          </div>
          <footer>
            <div className="columns">
              <div className="column">
                <img
                  className="c"
                  src={require("../images/logo.svg")}
                  alt="house"
                />
              </div>
              <div className="column">
                <p className="kill">FAQs</p>
                <p className="kill">Contact Us</p>
              </div>
              <div className="column">
                <p className="kill">Privacy Policy</p>
                <p className="kill">Press Kit</p>
              </div>
              <div className="column">
                {" "}
                <p className="kill">Install Guide</p>
              </div>
              <div id="jk" className="column">
                <div className="columns">
                  <div className="co">
                    <img
                      className="cen"
                      src={require("../images/icon-facebook.svg")}
                      alt="house"
                    />
                  </div>
                  <div className="co">
                    <img
                      className="cen"
                      src={require("../images/icon-twitter.svg")}
                      alt="house"
                    />
                  </div>
                  <div className="co">
                    <img
                      className="cen"
                      src={require("../images/icon-instagram.svg")}
                      alt="house"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="attribution">
                Challenge by
                <a href="https://www.frontendmentor.io?ref=challenge">
                  Frontend Mentor
                </a>
                . Coded by{" "}
                <a href="https://github.com/beloshh">badanga ishak</a>.
              </p>
            </div>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
