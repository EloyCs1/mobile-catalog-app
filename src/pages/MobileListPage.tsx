import Layout from '@pages/Layout/Layout';
import useMobileList from '@hooks/useMobileList';

const MobileListPage = () => {
  const { mobileList } = useMobileList();
  console.log('🚀 ~ MobileListPage ~ mobileList:', mobileList);
  return (
    <Layout>
      <></>
    </Layout>
  );
};
export default MobileListPage;
