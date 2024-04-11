
import { ComponentFrame } from "@/components/componentFrame";
import styles from "./page.module.css";

export default function Home() {

  return (
    <main className={styles.main}>
      <div style={{ height: "150px" }}>
        header
      </div>
      <div
        style={{
          width: "100%",
          minHeight: "auto",
          position: "relative"
        }}
      >
        <ComponentFrame src={"http://localhost:3000/"} />
        {/* <ComponentFrame src={"https://my-iframe-test.vercel.app"}/> */}
      </div>
      <div style={{
        height: "300px"
      }}>
        footer
      </div>
    </main>
  );
}
