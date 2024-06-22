
import './App.css'
import { Button, ConfigProvider, Space } from 'antd';
// import Index from './pages';

function App() {

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            // Seed Token，影响范围大
            colorPrimary: '#726DF9',
            borderRadius: 2,

            // 派生变量，影响范围小
            colorBgContainer: '#F1F0FF',
          },
        }}
      >
        <Space>
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          {/* <Index></Index> */}
        </Space>
      </ConfigProvider>
    </>
  )
}

export default App
