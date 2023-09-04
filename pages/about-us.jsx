import { Layout } from "../Client/Components/Layout/Layout";
import { TitlePages } from "../Client/utils";
import { HeaderVariant } from "../Client/Components/Layout/layout.standard.js";
import { AboutUs } from "../Client/Components/AboutUs/AboutUs";

const AboutUsPage = () => {
  return (
    <Layout title={TitlePages.ABOUT_US} variant={HeaderVariant.DARK}>
      <AboutUs />
    </Layout>
  );
};

export default AboutUsPage;
