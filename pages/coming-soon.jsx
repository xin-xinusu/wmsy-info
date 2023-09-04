import { ComingSoon } from "../Client/Components/ComingSoon/ComingSoon";
import { HeaderVariant } from "../Client/Components/Layout";
import { Layout } from "../Client/Components/Layout/Layout";
import { TitlePages } from "../Client/utils";

const ComingSoonPage = () => {
  return (
    <Layout title={TitlePages.COMING_SOON} variant={HeaderVariant.LIGHT}>
      <ComingSoon />
    </Layout>
  );
};

export default ComingSoonPage;
