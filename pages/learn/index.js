import { HeaderVariant } from "../../Client/Components/Layout";
import { Layout } from "../../Client/Components/Layout/Layout";
import { TitlePages } from "../../Client/utils";
import { Learn } from "../../Client/Components/Learn/Learn";

const LearnPage = () => {
  return (
    <Layout 
      title={TitlePages.LEARN} 
      variant={HeaderVariant.LIGHT}
    >
      <Learn />
    </Layout>
  );
};

export default LearnPage;
