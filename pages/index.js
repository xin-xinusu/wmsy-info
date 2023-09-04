import { Layout } from "../Client/Components/Layout/Layout";
import { TitlePages } from "../Client/utils/pages";
import { HomePage } from "../Client/Components/HomePage/HomePage";
import { HeaderVariant } from "../Client/Components/Layout/layout.standard";

export default function Web() {
  return (
    <Layout 
      title={TitlePages.HOME} 
      variant={HeaderVariant.LIGHT}
    >
      <HomePage />
    </Layout>
  );
}
