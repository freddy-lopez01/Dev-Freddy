import React, { useEffect } from "react";
import styles from "./ScrollTransition.css";

const ScrollTransition = () => {
  useEffect(() => {
    const SHITVIDEO = document.querySelector('#video');
    const myVIDEOWRAP = document.querySelector('#video-wrap');
    const TEXT = document.querySelector('#playit');
    const mySVG = document.querySelector('#svg-overlay');
    let vheight = 0;

    function init() {
      setTimeout(() => {
        SHITVIDEO.pause();
      }, 10);

      document.addEventListener('scroll', () => {
        vheight = window.innerHeight;
        let ratio = Math.max(window.scrollY) / vheight;
        mySVG.style.transform = 'scale(' + (1 + (ratio * 30)) + ')';
        myVIDEOWRAP.style.transform = 'scale(' + (1 + (1 - ratio)) + ')';
        mySVG.style.opacity = 2 * (1 - ratio);
      });

      if (!('IntersectionObserver' in window &&
        'IntersectionObserverEntry' in window &&
        'intersectionRatio' in window.IntersectionObserverEntry.prototype)) {
        return;
      } else {
        function handler(entries, observer) {
          for (let entry of entries) {
            if (entry.intersectionRatio > 0) {
              SHITVIDEO.play();
            } else {
              return;
            }
          }
        }
        let observer = new IntersectionObserver(handler);
        observer.observe(TEXT);
      }
    }

    init();
  }, []);

  return (
    <div>
      <section className={styles.asabove}>
        <div id="svg-overlay" className={styles.svgOverlay}>
          <img src="me.png" alt="iPad OS" />
        </div>
      </section>
      <section className={styles.sobelow}>
        <div id="video-wrap" className={styles.videoWrap}>
          <video id="video" muted playsInline preload="auto" autoPlay>
            <source src="https://vault.ampl.works/videos/IpadExampleVideo.mp4" type="video/mp4" />
          </video>
          <figure className={styles.figure}></figure>
        </div>
      </section>
      <div className={styles.bottomStuff}>
        <div id="playit">I'm a Text I play Things</div>
      </div>
    </div>
  );
};

export default ScrollTransition;

