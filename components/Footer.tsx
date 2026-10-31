import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <Image src="/images/icon.png" alt="Logo" width={40} height={40} />
          <p>Your Pets Best Life Starts Here.</p>
        </div>

        <div className={styles.links}>
          <h4>Quick Links</h4>
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Products</a>
          <a href="#">Services</a>
        </div>

        <div className={styles.socials}>
          <h4>Follow Us</h4>
          <div className={styles.icons}>
            <a href="#">FB</a>
            <a href="#">IG</a>
            <a href="#">TW</a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2025 Pet Store. All rights reserved.</p>
        <p>Design by Paloma Marmolejo</p>
      </div>
    </footer>
  );
}