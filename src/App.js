import './App.scss';
import { Layout } from 'antd'
import './Styles/base.scss'
import MainContent from './Components/MainContent/mainContent'
import MainHeader from './Components/MainHeader/mainHeader'

const { Header, Content } = Layout

function App() {
  return (
    <Layout className='layout__layout'>
      <Header className='layout__header'>
        <MainHeader>
        </MainHeader>
      </Header>
      <Content className='layout__content'>
        <MainContent>
        </MainContent>
      </Content>
    </Layout>
  );
}

export default App;
