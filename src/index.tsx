import ReactDOM from 'react-dom';
import { loadDevTools } from 'jira-dev-tool';
import 'antd/dist/antd.less';
import App from './App';
import { AppProviders } from './context/index';

loadDevTools(() => {
  ReactDOM.render(
    <AppProviders>
      <App />
    </AppProviders>,

    document.getElementById('root'),
  );
});
