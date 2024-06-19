// import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import HomeMyWork from "@/components/HomeMyWork";
import HomeSkillsets from "@/components/HomeSkillsets";
import HomeAboutMe from "@/components/HomeAboutMe";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <HomeMyWork />
      <HomeSkillsets />
      <HomeAboutMe />
    </main>
  );
}
