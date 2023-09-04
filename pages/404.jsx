import { HeaderVariant } from "../Client/Components/Layout";
import { Layout } from "../Client/Components/Layout/Layout";
import { NotFound } from "../Client/Components/NotFound/NotFound";
import { TitlePages } from "../Client/utils";

const PortfolioPage = () => {
  return (
    <Layout title={TitlePages.NOT_FOUND} variant={HeaderVariant.LIGHT}>
      <NotFound />
    </Layout>
  );
};

export default PortfolioPage;
