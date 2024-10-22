import styles from "./styles.module.css";

export default function Page() {
  return (
    <main>
      <div className="section container">
                <h1>Get ready for the 2024 crowdfunding campaign!</h1>
                <p>2…4…6… and we’re a go! The Lobstah Bots are back at it! Our crowdfunding campaign is kicking on October 27. Spread the word, stay tuned for some furious fundraising, and check back at this page.</p>
      </div>    
      <div className="bg-red"     >
        <div className="section container">
           <div className={styles.countdown}></div>
           <p>before the start of the crowdfunding!</p>
        </div>
      </div>                         
    </main>
  )
}