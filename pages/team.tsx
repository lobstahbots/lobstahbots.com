import teamPhoto from "../images/index/team-photo.jpg";
import styles from "./team.module.css";
import Image from "next/image";

export default function Team () {
  return (
    <main>
      <div className="padded-block bg-gray">
        <div className = "container">
          <Image src = {teamPhoto} className = {styles.headerImage} alt = "team photo"/>
        </div>
      </div>
      <div className = "section container">
        <div className={styles.centeredHeader}>
            By The Numbers
        </div>
        <div className = {styles.stats}>
          <div className = {styles.stat}>
            <div className = {styles.number}>40</div>
            <div className={styles.label}>Students</div>
          </div>
          <div className = { styles.stat } >
            <div className = { styles.number } > 7 </div>
            <div className={styles.label}>Mentors</div>
          </div>
          <div className = { styles.stat }>
            <div className = { styles.number } > 25 </div>
            < div className = { styles.label } > Years </div>
          </div>
          <div className = { styles.stat } >
            <div className = { styles.number } > 20 </div>
            < div className = { styles.label } > Awards Won </div>
          </div>
          <div className = { styles.stat } >
            <div className = { styles.number } > 15 </div>
            < div className = { styles.label } > Towns Represented </div>
          </div>
          <div className = { styles.stat } >
            <div className = { styles.number } > 7 </div>
            < div className = { styles.label } > Languages Spoken </div>
          </div>
          <div className = { styles.stat } >
            <div className = { styles.number }> 50 % </div>
            < div className = { styles.label } > Students of Color </div>
          </div>
        </div>
      </div>
      <div className="section padded-block bg-gray">
        <div className="container">
          <h1>Mentors</h1>
          <div className={styles.gallery}>
            <div className={styles.profile}>
              <Image className={styles.profilePhoto} src = {teamPhoto} alt = "Team Member Profile"/>
              <div className={styles.name}> Name </div>
              < div className = { styles.role } > Head Mentor </div>
              <p className = { styles.blurb }> Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed quis vestibulum magna, sit amet ornare justo.</p>
            </div>
            < div className = { styles.profile } >
              <Image className={ styles.profilePhoto } src = { teamPhoto } alt = "Team Member Profile" />
              <div className={ styles.name }> Name </div>
              < p className = { styles.blurb } > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed quis vestibulum magna, sit amet ornare justo.</p>
            </div>
            < div className = { styles.profile } >
              <Image className={ styles.profilePhoto } src = { teamPhoto } alt = "Team Member Profile" />
              <div className={ styles.name }> Name </div>
              < p className = { styles.blurb } > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed quis vestibulum magna, sit amet ornare justo.</p>
            </div>
            < div className = { styles.profile } >
              <Image className={ styles.profilePhoto } src = { teamPhoto } alt = "Team Member Profile" />
              <div className={ styles.name }> Name </div>
              < p className = { styles.blurb } > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed quis vestibulum magna, sit amet ornare justo.</p>
            </div>
            < div className = { styles.profile } >
              <Image className={ styles.profilePhoto } src = { teamPhoto } alt = "Team Member Profile" />
              <div className={ styles.name }> Name </div>
              < p className = { styles.blurb } > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed quis vestibulum magna, sit amet ornare justo.</p>
            </div>
            < div className = { styles.profile } >
              <Image className={ styles.profilePhoto } src = { teamPhoto } alt = "Team Member Profile" />
              <div className={ styles.name }> Name </div>
              < p className = { styles.blurb } > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed quis vestibulum magna, sit amet ornare justo.</p>
            </div>
            < div className = { styles.profile } >
              <Image className={ styles.profilePhoto } src = { teamPhoto } alt = "Team Member Profile" />
              <div className={ styles.name }> Name </div>
              < p className = { styles.blurb } > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed quis vestibulum magna, sit amet ornare justo.</p>
            </div>
            < div className = { styles.profile } >
              <Image className={ styles.profilePhoto } src = { teamPhoto } alt = "Team Member Profile" />
              <div className={ styles.name }> Name </div>
              < p className = { styles.blurb } > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed quis vestibulum magna, sit amet ornare justo.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section container">
        <h1 > Student Leadership </h1>
        < div className = { styles.gallery } >
          <div className={ styles.profile }>
            <Image className={ styles.profilePhoto } src = { teamPhoto } alt = "Team Member Profile" />
            <div className={ styles.name }> Name </div>
            <div className = {styles.role}>Mechanical Lead</div>
            < p className = { styles.blurb } > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed quis vestibulum magna, sit amet ornare justo.</p>
          </div>
          < div className = { styles.profile } >
            <Image className={ styles.profilePhoto } src = { teamPhoto } alt = "Team Member Profile" />
            <div className={ styles.name }> Name </div>
            <div className = { styles.role }>CAD Lead</div>
            < p className = { styles.blurb } > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed quis vestibulum magna, sit amet ornare justo.</p>
          </div>
          < div className = { styles.profile } >
            <Image className={ styles.profilePhoto } src = { teamPhoto } alt = "Team Member Profile" />
            <div className={ styles.name }> Name </div>
            < div className = { styles.role } > Programming Lead </div>
            < p className = { styles.blurb } > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed quis vestibulum magna, sit amet ornare justo.</p>
          </div>
          < div className = { styles.profile } >
            <Image className={ styles.profilePhoto } src = { teamPhoto } alt = "Team Member Profile" />
            <div className={ styles.name }> Name </div>
            < div className = { styles.role } > Electrical Lead </div>
            < p className = { styles.blurb } > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed quis vestibulum magna, sit amet ornare justo.</p>
          </div>
          < div className = { styles.profile } >
            <Image className={ styles.profilePhoto } src = { teamPhoto } alt = "Team Member Profile" />
            <div className={ styles.name }> Name </div>
            < div className = { styles.role } > Outreach & Business Lead </div>
            < p className = { styles.blurb } > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed quis vestibulum magna, sit amet ornare justo.</p>
          </div>
          < div className = { styles.profile } >
            <Image className={ styles.profilePhoto } src = { teamPhoto } alt = "Team Member Profile" />
            <div className={ styles.name }> Name </div>
            < div className = { styles.role } > Imagery & Branding Lead </div>
            < p className = { styles.blurb } > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed quis vestibulum magna, sit amet ornare justo.</p>
          </div>
          < div className = { styles.profile } >
            <Image className={ styles.profilePhoto } src = { teamPhoto } alt = "Team Member Profile" />
            <div className={ styles.name }> Name </div>
            < div className = { styles.role } > Student Board</div>
            < p className = { styles.blurb } > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed quis vestibulum magna, sit amet ornare justo.</p>
          </div>
          < div className = { styles.profile } >
            <Image className={ styles.profilePhoto } src = { teamPhoto } alt = "Team Member Profile" />
            <div className={ styles.name }> Name </div>
            < div className = { styles.role } > Student Board</div>
            < p className = { styles.blurb } > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed quis vestibulum magna, sit amet ornare justo.</p>
          </div>
        </div>
      </div>
      <div className="section container">
        < h1 > Student Members </h1>
        < div className = { styles.gallery } >
          <div className={ styles.profile }>
            <Image className={ styles.profilePhoto } src = { teamPhoto } alt = "Team Member Profile" />
            <div className={ styles.name }> Name </div>
            < p className = { styles.blurb } > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed quis vestibulum magna, sit amet ornare justo.</p>
          </div>
          < div className = { styles.profile } >
            <Image className={ styles.profilePhoto } src = { teamPhoto } alt = "Team Member Profile" />
            <div className={ styles.name }> Name </div>
            < p className = { styles.blurb } > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed quis vestibulum magna, sit amet ornare justo.</p>
          </div>
          < div className = { styles.profile } >
            <Image className={ styles.profilePhoto } src = { teamPhoto } alt = "Team Member Profile" />
            <div className={ styles.name }> Name </div>
            < p className = { styles.blurb } > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed quis vestibulum magna, sit amet ornare justo.</p>
          </div>
          < div className = { styles.profile } >
            <Image className={ styles.profilePhoto } src = { teamPhoto } alt = "Team Member Profile" />
            <div className={ styles.name }> Name </div>
            < p className = { styles.blurb } > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed quis vestibulum magna, sit amet ornare justo.</p>
          </div>
          < div className = { styles.profile } >
            <Image className={ styles.profilePhoto } src = { teamPhoto } alt = "Team Member Profile" />
            <div className={ styles.name }> Name </div>
            < p className = { styles.blurb } > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed quis vestibulum magna, sit amet ornare justo.</p>
          </div>
          < div className = { styles.profile } >
            <Image className={ styles.profilePhoto } src = { teamPhoto } alt = "Team Member Profile" />
            <div className={ styles.name }> Name </div>
            < p className = { styles.blurb } > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed quis vestibulum magna, sit amet ornare justo.</p>
          </div>
          < div className = { styles.profile } >
            <Image className={ styles.profilePhoto } src = { teamPhoto } alt = "Team Member Profile" />
            <div className={ styles.name }> Name </div>
            < p className = { styles.blurb } > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed quis vestibulum magna, sit amet ornare justo.</p>
          </div>
          < div className = { styles.profile } >
            <Image className={ styles.profilePhoto } src = { teamPhoto } alt = "Team Member Profile" />
            <div className={ styles.name }> Name </div>
            < p className = { styles.blurb } > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed quis vestibulum magna, sit amet ornare justo.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
