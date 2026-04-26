import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Administración de Sistemas GNU/Linux",
    Svg: require("@site/static/img/linux.svg").default,
    description: (
      <>
        Comandos, configuraciones, scripts y todo lo relacionado con la
        administración de sistemas GNU/Linux. Distros como Ubuntu, Fedora, Arch
        Linux y más.
      </>
    ),
  },
  {
    title: "Administración de Sistemas Windows",
    Svg: require("@site/static/img/windows.svg").default,
    description: (
      <>
        Comandos, configuraciones, scripts y todo lo relacionado con la
        administración de sistemas Windows. Desde lo más básico hasta temas
        avanzados.
      </>
    ),
  },
  {
    title: "Programación y DevOps",
    Svg: require("@site/static/img/code.svg").default,
    description: (
      <>
        Apuntes relacionados con programación, desarrollo de software, DevOps,
        contenedores, CI/CD y más.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
