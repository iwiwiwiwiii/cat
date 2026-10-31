import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Your Pets Best <br />
          Life Starts Here
        </h1>
        <p className={styles.description}>
          Are You Ready for a Pet Store That Understands <br />
          Them? Imagine a place where your furry family <br />
          members aren&apos;t just customers, but honored guests. <br />
          A place where every product and service is curated <br />
          with your pet&apos;s true happiness and well-being in <br />
          mind.
        </p>
        <button className={styles.ctaButton}>Explore Now</button>
      </div>

      <div className={styles.imageWrapper}>
        <img src="/images/spot.png" alt="wave background" className={styles.blob} />

        <Image
          src="/images/lapka1.png"
          alt="paw light"
          width={200}
          height={180}
          className={`${styles.paw} ${styles.pawLight}`}
        />

        <Image
          src="/images/lapka3.png"
          alt="paw dark"
          width={110}
          height={100}
          className={`${styles.paw} ${styles.pawTopRight}`}
        />

        <Image
          src="/images/lapka3.png"
          alt="paw dark"
          width={70}
          height={60}
          className={`${styles.paw} ${styles.pawBottomRight}`}
        />

        <Image
          src="/images/lapka3.png"
          alt="paw dark"
          width={70}
          height={60}
          className={`${styles.paw} ${styles.pawMiddleLeft}`}
        />

        <Image
          src="/images/lapka3.png"
          alt="paw dark"
          width={110}
          height={100}
          className={`${styles.paw} ${styles.pawBottomLeft}`}
        />

        <Image
          src="/images/cat.png"
          alt="Cute cat with paws up"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
          className={styles.catImage}
        />
      </div>
    </section>
  );
}