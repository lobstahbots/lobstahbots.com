import styles from "./contact.module.css";

export default function Contact () {
  return (
    <main className={`section container ${styles.main}`}>
      <h1>Contact Us </h1>
      <p> 110 Cummington Mall <br></br>
                Boston, MA 02478 </p>
      <p className="link"> lobstahbots@gmail.com</p>
      <div className={styles.form} >
        <form action="/email" method="post">
          <div className={styles.input}> <label htmlFor="Name">Name</label>
            <input type="text" id="Name" name="Name" required/></div>
          <div className={styles.input}> <label htmlFor="Email Address">Email Address</label>
            <input type="text" id="email" name="email" required/> </div>
          <div className={styles.input}> <label htmlFor="Subject">Subject</label>
            <input type="text" id="subject" name="subject" required/></div>
          <div className={styles.input}> <label htmlFor="Message"> Message</label>
            <textarea id="message" name="message" required className={styles.longInput}/>
          </div>
          <div className={styles.input}> <button type="submit" className={`button ${styles.submit}`}>Submit</button></div>
        </form>
      </div>
    </main>
  );
}
