import styles from "./page.module.css";
import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('@/components/componentFrame'), {
  ssr: true
})

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
        <DynamicComponent src={"http://localhost:3000/?id=asdasdasdasdasdas"} />
        <DynamicComponent src={"http://localhost:3000/pagina/2"} />
        {/* <DynamicComponent src={"https://my-iframe-test.vercel.app/"} /> */}
      </div>
      <div style={{
        height: "300px"
      }}>
        footer
      </div>
    </main>
  );
}
