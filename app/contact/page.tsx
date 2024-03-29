import styles from "./styles.module.css";

export const metadata = {
  title: "Contact Us",
};

export default function Contact () {
  return (
    <main className="bg-gray">
      <div className={`section container ${styles.main}`}>
        <h1>Contact Us </h1>
        <p> 110 Cummington Mall <br></br>
                Boston, MA 02215 </p>
        <p className="link"> lobstahbots@gmail.com</p>
        <div className={styles.form} >
          <form action="https://api.staticforms.xyz/submit" method="post">
            <input type="hidden" name="accessKey" value="a1b76e8f-cced-4977-a785-1c408a5a0c86" />
            <div className={styles.input}> <label htmlFor="name">Name</label>
              <input type="text" name="name" required/></div>
            <div className={styles.input}> <label htmlFor="email">Email Address</label>
              <input type="text" name="email" required/> </div>
            <div className={styles.input}> <label htmlFor="subject">Subject</label>
              <input type="text" name="subject" required/></div>
            <div className={styles.input}> <label htmlFor="message"> Message</label>
              <textarea name="message" required className={styles.longInput}/>
            </div>
            <input type="hidden" name="replyTo" value="@" />
            <input type="text" name="honeypot" style={{ display: "none" }} />
            <div className={styles.input}> <button type="submit" className={`button ${styles.submit}`}>Submit</button></div>
          </form>
        </div>
      </div>
    </main>
  );
}
